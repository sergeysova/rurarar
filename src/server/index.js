import { resolve } from 'path'
import Express from 'express'
import debug from 'debug'
import morgan from 'morgan'


/* global __DEVELOPMENT__ */

const LOG = debug('APP:SERVER')
const app = Express()
let config = {
  port: process.env.PORT || 4500,
}

app.use(morgan('combined'))

function clearDependencies(regexp) {
  return Object.keys(require.cache)
    .filter(e => !((/node_modules/g).test(e)))
    .filter(id => regexp.test(id))
    .map(id => {
      delete require.cache[id]
      return id
    })
}

if (__DEVELOPMENT__) {
  LOG('Enabled development mode.')

  config = require('../../webpack/dev.config')
  const { watch } = require('chokidar')

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const watcher = watch(resolve(__dirname, '..', 'app'))
  const compiler = webpack(config)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false,
      modules: false,
    },
    historyApiFallback: true,
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  watcher.on('ready', () => {
    watcher.on('all', (e, path) => {
      LOG('Clearing module cache', e, path)
      LOG('Cleared:', clearDependencies(/[/\\]app[/\\]/))
    })
  })

  compiler.plugin('done', () => {
    LOG('Clearing react module cache')
    LOG('Cleared:', clearDependencies(/[/\\]app[/\\]/))
  })

  delete require.cache[require.resolve('./render')]
} // if (__DEVELOPMENT__)


app.use('/dist', Express.static('dist'))
app.get('*', (req, res) => require('./render').default(req, res))

app.listen(config.port, err =>
  err
    ? LOG('ERROR', err)
    : LOG(`Listen ${config.port} port...`),
)
