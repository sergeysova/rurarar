
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import createStore from './store/create'

const target = document.getElementById('wbpp')
const store = createStore({})

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
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>,
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
