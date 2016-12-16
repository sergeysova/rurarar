import Express from 'express'
import debug from 'debug'
import { watch } from 'chokidar'
import morgan from 'morgan'

import config from '../../webpack/dev.config'

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

// DEVELOPMENT MODE
if (global.NODE_ENV === 'development') {
  LOG('Enabled development mode.')

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const watcher = watch(__dirname)
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
      LOG('Cleared:', clearDependencies(/[/\\]src[/\\]/))
    })
  })

  compiler.plugin('done', () => {
    LOG('Clearing react module cache')
    LOG('Cleared:', clearDependencies(/[/\\]src[/\\]/))
  })

  delete require.cache[require.resolve('server/render')]
}
// \DEVELOPMENT MODE

app.use('/dist', Express.static('dist'))
app.get('*', (req, res) => require('server/render').default(req, res))

app.listen(config.port, err =>
  err
    ? LOG('ERROR', err)
    : LOG(`Listen ${config.port} port...`),
)
