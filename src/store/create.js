import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Github from 'app/data/github'
import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
/* global __DEVELOPMENT__ */

export default initialState => {
  const github = new Github()

  const middlewares = [
    thunk.withExtraArgument({ github }),
  ]

  const composeWithDevTools = __DEVELOPMENT__
    && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
}
