import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
/* global __DEVELOPMENT__ */

const middlewares = [
  thunk,
]

const composeWithDevTools = __DEVELOPMENT__ && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

export default initialState =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
