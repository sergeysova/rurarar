import React from 'react'
import Express from 'express'
import { renderToString } from 'react-dom/server'

import config from '../webpack/dev.config'
import App from 'app'

const app = Express()

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

app.use(Express.static('dist'))
app.get('*', handleRender)
app.listen(config.port, err =>
  err
    ? console.error('ERROR', err)
    : console.log(`Listen ${config.port} port...`)
)

function handleRender(req, res) {
  res.send(renderPage(renderToString(<App />)))
}

function renderPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Example app</title>
      </head>
      <body>
        <div id="wbpp">${html}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}
