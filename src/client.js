
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory } from 'react-router'

const target = document.getElementById('wbpp')

function render() {
  const { pathname, search, hash } = window.location
  const createRouting = require('./routing').default
  const routes = createRouting()

  match({ routes, location: `${pathname}${search}${hash}` }, (error, redirectLocation, renderProps) => {
    const { components } = renderProps

    const getLocals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
    }

    ReactDOM.render(
      <Router routes={routes} history={browserHistory} />,
    target)
  })
}

if (target) {

  if (module.hot) {
    module.hot.accept('./routing/index', () => {
      setTimeout(() => render(), 1)
    })
  }

  render()
}
