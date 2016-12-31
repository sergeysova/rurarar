import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose } from 'recompose'

import { useSheet } from 'styles/jss'
import { Column } from 'components/molecules'


const styles = {
  content: {
    minHeight: '84vh',
    background: 'white',
  },
  contentContainer: {
    minWidth: '800px', // TODO: hardcode
  },
}

const enhance = compose(
  useSheet(styles),
)

const Container = ({ className, sheet: { classes }, children }) => (
  <Column tag="section" alignItems="center" className={cn(classes.content, className)}>
    <Column className={classes.contentContainer}>
      {children}
    </Column>
  </Column>
)

Container.propTypes = {
  sheet: PropTypes.object,

  className: PropTypes.string,
  children: PropTypes.node,
}

export default enhance(Container)
