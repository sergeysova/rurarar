import React from 'react'
import Express from 'express'
import { renderToString } from 'react-dom/server'

import App from 'app'

const app = Express()

app.get('*', handleRender)

app.listen(4500, () => console.log('Listen 4500 port...'))

function handleRender(req, res) {
  const html = renderToString(
    <App />
  )

  res.send(renderPage(html))
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
      </body>
    </html>
  `
}
