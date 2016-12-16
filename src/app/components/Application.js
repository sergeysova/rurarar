import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { useSheet } from 'styles/jss'
import { getColor, getText } from 'styles/palette'

import Header from './Header'

const styles = {
  application: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '84vh',
    background: 'white',
  },
  footer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    background: getColor('Light Blue'),
    lineHeight: '80px',
    color: getColor('White', 'Hint'),
  },
}

/* eslint-disable no-console */
const redial = {
  fetch: () => Promise.all([
    new Promise(resolve => {
      console.log('start loading')
      setTimeout(() => {
        // Simulate preloading data
        resolve()
      }, 80)
    }).then(() => console.log('finish loading')),
  ]),
}
/* eslint-enable no-console */

const enhance = compose(
  connect(),
  useSheet(styles),
  provideHooks(redial),
)

const Home = ({ children, sheet: { classes } }) => (
  <div className={classes.application}>
    <Header />
    <section className={classes.content}>{children}</section>
    <footer className={classes.footer}>RuRaRaR</footer>
  </div>
)

Home.propTypes = {
  children: PropTypes.node,
  sheet: PropTypes.object,
}

export default enhance(Home)
