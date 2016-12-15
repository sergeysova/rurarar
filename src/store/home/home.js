
import { createActions, createReducer } from 'store/utils'

const A = createActions(['setNumber', 'showNumber', 'hideNumber'], 'home')

const initialState = {
  number: 0,
  show: false,
}

export default createReducer(initialState, {
  [A.setNumber.type]: (state, { number }) => ({ ...state, number }),
  [A.showNumber.type]: state => ({ ...state, show: true }),
  [A.hideNumber.type]: state => ({ ...state, show: false }),
})


export function setNumber(number) {
  return A.setNumber({ number })
}

export function showNumber() {
  return A.showNumber()
}

export function hideNumber() {
  return A.hideNumber()
}