import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'
import stylesClasses from 'styles'
import { useSheet } from 'styles/jss'
import { Types, selectClasses } from 'styles/mixins'

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, stylesClasses.classes, ['marginBetween']),
    },
    tag: props.tag || 'div',
  })),
)

const Row = ({ children, classes, className, tag: Tag }) => (
  <Tag className={cn(classes.column, classes.additional, className)}>{children}</Tag>
)

Row.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  marginBetween: Types.marginBetween,
  tag: PropTypes.string,
}

export default enhance(Row)
