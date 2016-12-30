import { combineReducers } from 'redux'
import * as github from './github'

export default combineReducers({
  default: () => ({}),
  ...github,
})
