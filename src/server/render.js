import React from 'react'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import styleSheet from 'styled-components/lib/models/StyleSheet'

import createRouting from 'routes'
import baseStyles from 'styles'
import createStore from '../createStore'


/* eslint-disable react/jsx-filename-extension */
/* global __DEVELOPMENT__ */

function renderPage(html, state, styles) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>RURARAR</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400|Titillium+Web" rel="stylesheet" />
        <style type="text/css" id="ssrs">${styles}</style>
      </head>
      <body>
        <div id="wbpp">${html}</div>
        <script>window.INITIAL_STATE = ${JSON.stringify(state)}</script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}

export default function handleRender(req, res) {
  const routes = createRouting()
  const store = createStore({})
  styleSheet.sheet && styleSheet.flush()

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
            </Provider>,
          )
          const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')

          res.status(200).send(renderPage(result, state, styles))
        })
        .catch(err => {
          if (__DEVELOPMENT__) {
            res.status(500).send(`${err.toString()}<pre>${err.stack}</pre>`)
          }
          else {
            res.status(500).send('Server error!')
          }
        })
    }
    else {
      res.status(404).send('File Not Found')
    }
  })
}
