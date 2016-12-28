import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'
import stylesClasses from 'styles'
import { useSheet } from 'styles/jss'
import { Types, selectClasses, all as allMixins } from 'styles/mixins'

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
  },

  marginBetween_XS: { '& > * + *': { marginTop: '4px' } },
  marginBetween_S: { '& > * + *': { marginTop: '8px' } },
  marginBetween_M: { '& > * + *': { marginTop: '14px' } },
  marginBetween_L: { '& > * + *': { marginTop: '24px' } },
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, marginBetween, tag, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, stylesClasses.classes, allMixins),
      margin: marginBetween && classes[`marginBetween_${marginBetween}`],
    },
    tag: tag || 'div',
  })),
)

const Column = ({ children, classes, className, tag: Tag }) => (
  <Tag className={cn(classes.column, classes.additional, classes.margin, className)}>{children}</Tag>
)

Column.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  ...Types,
  tag: PropTypes.string,
  marginBetween: PropTypes.oneOf(['XS', 'S', 'M', 'L'])
}

export default enhance(Column)
