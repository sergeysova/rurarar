import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'
import { useSheet } from 'styles/jss'
import { Types, padding, justifyContent, marginBetween, selectClasses } from 'styles/mixins'

const styles = {
  column: {
    display: 'flex',
  },
  ...padding,
  ...justifyContent,
  ...marginBetween,
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, classes, ['padding', 'justifyContent', 'marginBetween']),
    },
  })),
)

const Layout = ({ children, classes, className }) => (
  <div className={cn(classes.column, classes.additional, className)}>{children}</div>
)

Layout.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  ...Types,
}

export default enhance(Layout)
