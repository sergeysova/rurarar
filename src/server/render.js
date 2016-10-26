import React from 'react'
import { renderToString } from 'react-dom/server'

import App from 'app'


export default function handleRender(req, res) {
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
