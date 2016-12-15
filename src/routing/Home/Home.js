import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import * as actions from 'store/home/home'


const enhance = compose(
  connect(({ home }) => ({ home }), actions),
  lifecycle({
    componentWillMount() {
      this.props.setNumber(Math.floor(Math.random() * 90) / 10)
      this.props.showNumber()
      console.log('will', this.props.home)
    },
    componentDidMount() {
      console.log('did')
    },
  }),
)

const Home = ({ home: { number, show } }) => (
  <div>
    <h4>Home page</h4>
    <Link to="/base">To base</Link>
    {show && <div>Number: {number}</div>}
  </div>
)

export default enhance(Home)
