import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'

import stylesClasses from 'styles'
import { useSheet } from 'styles/jss'
import { Types, selectClasses } from 'styles/mixins'


const styles = {
  layout: {
    display: 'flex',
  },
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, stylesClasses.classes, ['padding', 'justifyContent', 'alignItems']),
    },
  })),
)

const Layout = ({ children, classes, className }) => (
  <div className={cn(classes.layout, classes.additional, className)}>{children}</div>
)

Layout.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  padding: Types.padding,
  justifyContent: Types.justifyContent,
}

export default enhance(Layout)
