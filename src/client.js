
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import createStore from './store/create'

const target = document.getElementById('wbpp')
const store = createStore(window.INITIAL_STATE || {})

function render() {
  const { pathname, search, hash } = window.location
  const location = `${pathname}${search}${hash}`

  const createRouting = require('./routing').default
  const routes = createRouting()

  match({ routes, location }, () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} key={Math.random()} />
      </Provider>,
      target
    )
  })

  return browserHistory.listen(location => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error)
        console.error(error)

      const { components } = renderProps

      const getLocals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        dispatch: store.dispatch,
      }

      if (window.INITIAL_STATE)
        delete window.INITIAL_STATE
      else
        trigger('fetch', components, getLocals)

      trigger('defer', components, getLocals)
    })
  })
}

if (target) {
  let unusubscribeHistory = render()

  if (module.hot) {
    module.hot.accept('./routing/index', () => {
      unusubscribeHistory && unusubscribeHistory()
      setTimeout(() => {
        unusubscribeHistory = render()
      }, 1)
    })
  }


}
