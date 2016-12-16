import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { useSheet } from 'styles/jss'


const styles = {
  notFound: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 32,
    padding: '20px 0',
  },

}

const enhance = compose(
  useSheet(styles),
)

const NotFoundRoute = ({ sheet: { classes } }) => (
  <div className={classes.notFound}>
    Page not found!
  </div>
)

NotFoundRoute.propTypes = {
  sheet: PropTypes.object,
}

export default enhance(NotFoundRoute)
