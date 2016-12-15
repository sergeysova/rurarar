import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import { trigger } from 'redial'
import routing from '../routing'
import createStore from '../store/create'

export default function handleRender(req, res) {
  const routes = routing()
  const store = createStore({})

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    }
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }
    else if (renderProps) {
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        dispatch: store.dispatch,
      }

      trigger('fetch', renderProps.components, locals)
        .then(() => {
          const state = store.getState()
          const result = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )

          res.status(200).send(renderPage(result, state))
        })
        .catch(err => res.status(500).send(error.message))
    }
    else {
      res.status(404).send('File Not Found')
    }
  })
}

function renderPage(html, state) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Example app</title>
      </head>
      <body>
        <div id="wbpp">${html}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(state)}</script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}

