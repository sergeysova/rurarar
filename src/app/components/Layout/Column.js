import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'
import { useSheet } from 'styles/jss'
import { Types, marginBetween, padding, justifyContent, selectClasses } from 'styles/mixins'

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  ...marginBetween,
  ...padding,
  ...justifyContent,
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, classes, ['marginBetween', 'justifyContent', 'padding']),
    },
  })),
)

const Column = ({ children, classes, className }) => (
  <div className={cn(classes.column, classes.additional, className)}>{children}</div>
)

Column.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  ...Types,
}

export default enhance(Column)
