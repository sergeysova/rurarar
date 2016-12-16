import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import { trigger } from 'redial'
import { SheetsRegistryProvider, SheetsRegistry } from 'react-jss'
import routing from '../routing'
import createStore from '../store/create'
import baseStyles from '../styles'

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
          const sheetsRegistry = new SheetsRegistry()

          const state = store.getState()
          const result = renderToString(
            <SheetsRegistryProvider registry={sheetsRegistry}>
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            </SheetsRegistryProvider>
          )

          res.status(200).send(renderPage(result, state, sheetsRegistry.toString()))
        })
        .catch(err => res.status(500).send(err))
    }
    else {
      res.status(404).send('File Not Found')
    }
  })
}

function renderPage(html, state, styles) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Example app</title>
      </head>
      <style type="text/css" data-jss="" data-meta="base-styles">${baseStyles().toString()}</style>
      <style type="text/css" id="ssrs">${styles}</style>
      <body>
        <div id="wbpp">${html}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(state)}</script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}

