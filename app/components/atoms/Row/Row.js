import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose, mapProps } from 'recompose'

import globalStyles from 'styles'
import { useSheet } from 'styles/jss'
import { Types, selectClasses, all as allMixins } from 'styles/mixins'


const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  marginBetween_XS: { '& > * + *': { marginLeft: '4px' } },
  marginBetween_S: { '& > * + *': { marginLeft: '8px' } },
  marginBetween_M: { '& > * + *': { marginLeft: '14px' } },
  marginBetween_L: { '& > * + *': { marginLeft: '24px' } },
}

const enhance = compose(
  useSheet(styles),
  mapProps(({ sheet: { classes }, marginBetween, ...props }) => ({
    ...props,
    classes: {
      ...classes,
      additional: selectClasses(props, globalStyles.classes, allMixins, [
        marginBetween && classes[`marginBetween_${marginBetween}`],
      ]),
    },
    tag: props.tag || 'div',
  })),
)

const Row = ({ children, classes, className, tag: Tag }) => (
  <Tag className={cn(classes.row, classes.additional, className)}>{children}</Tag>
)

Row.propTypes = {
  classes: PropTypes.object,

  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  ...Types,
  marginBetween: PropTypes.oneOf(['XS', 'S', 'M', 'L'])
}

export default enhance(Row)
