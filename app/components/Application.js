import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import { Column } from 'components/Layout'
import { useSheet } from 'styles/jss'
import { getColor } from 'styles/palette'

import Header from './Header'


const styles = {
  content: {
    minHeight: '84vh',
    background: 'white',
  },
  contentContainer: {
    minWidth: '800px', // TODO: hardcode
  },
  footer: {
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
  <Column>
    <Header />
    <Column tag="section" alignItems="center" className={classes.content}>
      <Column className={classes.contentContainer}>
        {children}
      </Column>
    </Column>
    <Column justifyContent="center" alignItems="center" tag="footer" className={classes.footer}>RuRaRaR</Column>
  </Column>
)

Home.propTypes = {
  children: PropTypes.node,
  sheet: PropTypes.object,
}

export default enhance(Home)
