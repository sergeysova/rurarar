import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { useSheet } from 'styles/jss'
import { getColor } from 'styles/palette'

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
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    minWidth: '800px', // TODO: hardcode
    flexFlow: 'column nowrap',
  },
  footer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    background: getColor('Light Blue'),
    lineHeight: '80px',
    color: getColor('White', 'Hint'),
  },
}

const enhance = compose(
  connect(),
  useSheet(styles),
)

const Home = ({ children, sheet: { classes } }) => (
  <div className={classes.application}>
    <Header />
    <section className={classes.content}>
      <div className={classes.contentContainer}>
        {children}
      </div>
    </section>
    <footer className={classes.footer}>RuRaRaR</footer>
  </div>
)

Home.propTypes = {
  children: PropTypes.node,
  sheet: PropTypes.object,
}

export default enhance(Home)
