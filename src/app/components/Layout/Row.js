import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'
import { useSheet } from 'styles/jss'
import { marginBetween, Types, selectClasses } from 'styles/mixins'

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  ...marginBetween,
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, classes, ['marginBetween']),
    },
  })),
)

const Row = ({ children, classes, className }) => (
  <div className={cn(classes.column, classes.additional, className)}>{children}</div>
)

Row.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  marginBetween: Types.marginBetween,
}

export default enhance(Row)
