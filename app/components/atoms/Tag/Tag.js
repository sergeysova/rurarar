import React, { PropTypes } from 'react'

import { blacklist } from 'utils'

const removeMixinProps = blacklist(['marginBetween', 'padding', 'justifyContent', 'alignItems'])

const Tag = ({ tag: TagName, children, ...props }) => (
  <TagName {...removeMixinProps(props)}>{children}</TagName>
)

Tag.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
}

Tag.defaultProps = {
  tag: 'div',
}

export default Tag
