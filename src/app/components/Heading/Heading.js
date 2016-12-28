import React, { PropTypes } from 'react'
import cn from 'classnames'
import { useSheet } from 'styles/jss'
import { getText } from 'styles/palette'

const styles = {
  heading: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: '0 16px',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    lineHeight: 2.6,
  },
  h1: {
    fontSize: '34px',
    margin: '0 12px',
    fontWeight: 300,
  },
  h2: {},
  h3: {},
}

const Heading = ({ children, sheet: { classes }, level = 1 }) => (
  <div className={cn(classes.heading, classes[`h${level}`])}>
    {children}
  </div>
)

Heading.propTypes = {
  sheet: PropTypes.object,

  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3]),
}

export default useSheet(styles)(Heading)
