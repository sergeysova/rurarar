import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { provideHooks } from 'redial'
import { useSheet } from 'styles/jss'

import * as actions from 'store/home/home'

const styles = {
  home: {
    display: 'flex',
    flexFlow: 'column',
  },
  header: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
  },
}

const redial = {
  fetch: ({ dispatch }) => Promise.all([
    dispatch(actions.setNumber(Math.floor(Math.random() * 90) / 10)),
    dispatch(actions.showNumber()),
  ]),
}

const enhance = compose(
  useSheet(styles),
  connect(({ home }) => ({ home }), actions),
  provideHooks(redial),
  lifecycle({
    componentWillMount() {
      console.log('will', this.props.home)
    },
    componentDidMount() {
      console.log('did')
    },
    componentWillReceiveProps() {
      console.log('update')
    },
  }),
)

const Home = ({ home: { number, show }, sheet: { classes } }) => (
  <div className={classes.home}>
    <h4 className={classes.header}>Home page</h4>
    <Link to="/base">To base</Link>
    {show && <div>Number: {number}</div>}
  </div>
)

export default enhance(Home)
