import { createStore } from 'redux'
import reducers from './reducers'

export default (initialState) =>
  createStore(
    reducers,
    initialState,
    typeof window == 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined,
  )