
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import createStore from './store/create'
import baseStyleSheet from './styles'

const target = document.getElementById('wbpp')
const store = createStore(window.INITIAL_STATE || {})

function render() {
  const { pathname, search, hash } = window.location

  const createRouting = require('./routing').default
  const routes = createRouting()
  baseStyleSheet.attach()

  match({ routes, location: `${pathname}${search}${hash}` }, () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} key={Math.random()} />
      </Provider>,
      target,
      () => {
        const JssStyles = document.getElementById('ssrs')
        JssStyles && JssStyles.parentNode.removeChild(JssStyles)
      },
    )
  })

  return browserHistory.listen(location => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) { console.error(error) } // eslint-disable-line no-console

      const { components } = renderProps

      const getLocals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        dispatch: store.dispatch,
      }

      if (window.INITIAL_STATE) {
        delete window.INITIAL_STATE
      }
      else {
        trigger('fetch', components, getLocals)
      }

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
