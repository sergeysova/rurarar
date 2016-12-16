import { createStore } from 'redux'
import reducers from './reducers'

/* eslint-disable no-underscore-dangle */

export default initialState =>
  createStore(
    reducers,
    initialState,
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {},
  )
