import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { provideHooks } from 'redial'

import * as actions from 'store/home/home'

const redial = {
  fetch: ({ dispatch }) => Promise.all([
    dispatch(actions.setNumber(Math.floor(Math.random() * 90) / 10)),
    dispatch(actions.showNumber()),
  ]),
}

const enhance = compose(
  connect(({ home }) => ({ home }), actions),
  provideHooks(redial),
)

const Home = ({ home: { number, show } }) => (
  <div>
    <h4>Home page</h4>
    <Link to="/base">To base</Link>
    {show && <div>Number: {number}</div>}
  </div>
)

export default enhance(Home)
