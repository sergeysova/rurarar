import { join } from 'path'
import Express from 'express'
import debug from 'debug'
import morgan from 'morgan'
import { tap, curryN, keys, pipe, filter, reject, map } from 'ramda'


/* global __DEVELOPMENT__ */

const PORT = process.env.PORT || 4500
const LOG = debug('APP:SERVER')
const app = Express()

app.use(morgan('combined'))

if (__DEVELOPMENT__) {
  LOG('Enabled development mode.')

  const regexpTest = curryN(2, (regexp, item) => regexp.test(item))
  const clearDependencies = regexp => pipe(
    keys,
    reject(regexpTest(/node_modules/)),
    filter(regexpTest(regexp)),
    map(tap(e => LOG('+:', regexp, e))),
    map(tap(id => delete require.cache[id])),
  )(require.cache)

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
    LOG('WEBPACK ERROR:', e.message)
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
      LOG('Clearing module cache:', e, path)
      LOG('Cleared:', clearDependencies(/[/\\](app|src)[/\\]/))
      delete require.cache[require.resolve('./render')]
    })
  })

  compiler.plugin('done', () => {
    LOG('Clearing react module cache')
    // LOG('Cleared:', clearDependencies(/[/\\]app[/\\]/))
    LOG('Cleared:', clearDependencies(/[/\\](app|src)[/\\]/))
    delete require.cache[require.resolve('./render')]
  })
} // if (__DEVELOPMENT__)


app.use('/dist', Express.static('dist'))
app.get('*', (req, res) => require('./render').default(req, res))

app.listen(PORT, err =>
  err
    ? LOG('ERROR', err)
    : LOG(`Listen ${PORT} port...`),
)
