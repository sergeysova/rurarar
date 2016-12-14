import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routing from 'routing'

export default function handleRender(req, res) {
  const routes = routing()

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    }
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }
    else if (renderProps) {
      res.status(200).send(renderPage(renderToString(
        <RouterContext {...renderProps} />
      )))
    }
    else {
      res.status(404).send('File Not Found')
    }
  })
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

