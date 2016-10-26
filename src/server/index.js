import Express from 'express'
import debug from 'debug'
import { watch } from 'chokidar'

import config from '../../webpack/dev.config'

const LOG = debug('APP:SERVER')
const app = Express()

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
    watcher.on('all', () => {
      LOG('Clearing module cache')
      Object.keys(require.cache).forEach(id => {
        if (/[\/\\]src[\/\\]/.test(id)) delete require.cache[id]
      })
    })
  })

  compiler.plugin('done', () => {
    LOG('Clearing react module cache')
    Object.keys(require.cache).forEach(id => {
      if (/[\/\\]src[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
    })
  })
}
// \DEVELOPMENT MODE

app.use('/dist', Express.static('dist'))
app.get('*', require('server/render').default)

app.listen(config.port, err =>
  err
    ? console.error('ERROR', err)
    : console.log(`Listen ${config.port} port...`)
)
