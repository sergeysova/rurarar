import React, { PropTypes } from 'react'
import { compose } from 'recompose'

import { Layout } from 'components/atoms'
import { useSheet } from 'styles/jss'


const styles = {
  notFound: {
    justifyContent: 'center',
    fontSize: 32,
    alignItems: 'center',
  },
}

const enhance = compose(
  useSheet(styles),
)

const NotFound = ({ sheet: { classes } }) => (
  <Layout className={classes.notFound} padding="L">
    Page not found!
  </Layout>
)

NotFound.propTypes = {
  sheet: PropTypes.object,
}

export default enhance(NotFound)
