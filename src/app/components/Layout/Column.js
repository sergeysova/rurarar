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
  mapProps(({ sheet: { classes }, tag, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(
        props,
        stylesClasses.classes,
        ['marginBetween', 'justifyContent', 'padding', 'alignItems']
      ),
    },
    tag: tag || 'div',
  })),
)

const Column = ({ children, classes, className, tag: Tag }) => (
  <Tag className={cn(classes.column, classes.additional, className)}>{children}</Tag>
)

Column.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  ...Types,
  tag: PropTypes.string,
}

export default enhance(Column)
