import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { useSheet } from 'styles/jss'

import Who from './who'
import Demo from './components/demo'

const styles = {
  app: {
    padding: 20,
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
}

const enhance = compose(
  useSheet(styles),
)


const App = ({ children, sheet: { classes } }) => (
  <div className={classes.app}>
    <Who />
    <Demo />
    <br /><br />
    {children}
    <div>foot</div>
  </div>
)

App.propTypes = {
  sheet: PropTypes.object,

  children: PropTypes.node,
}

export default enhance(App)

