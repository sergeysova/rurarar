import { join } from 'path'
import Express from 'express'
import debug from 'debug'
import morgan from 'morgan'


/* global __DEVELOPMENT__ */

const PORT = process.env.PORT || 4500
const LOG = debug('APP:SERVER')
const app = Express()

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

  const config = require('../../webpack/dev.config').default
  const { watch } = require('chokidar')

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const watcher = watch(join(__dirname, '..', '..', 'app'))
  let compiler

  try {
    compiler = webpack(config)
  }
  catch (e) {
    console.log('WEBPACK ERROR:', e.message)
    throw e
  }

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

app.listen(PORT, err =>
  err
    ? LOG('ERROR', err)
    : LOG(`Listen ${PORT} port...`),
)
