import Express from 'express'

import config from '../../webpack/dev.config'

const app = Express()

// DEVELOPMENT MODE
if (global.NODE_ENV === 'development') {
  console.log('Enabled development mode.')

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

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
}
// \DEVELOPMENT MODE

app.use('/dist', Express.static('dist'))
app.get('*', require('server/render').default)

if (global.NODE_ENV === 'development') {

}
else {

}

app.listen(config.port, err =>
  err
    ? console.error('ERROR', err)
    : console.log(`Listen ${config.port} port...`)
)
