import React, { PropTypes } from 'react'
import { useSheet } from 'styles/jss'
import { getText } from 'styles/palette'

const styles = {
  input: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    backgroundColor: 'white',
    border: `1px solid rgba(0,0,0,.4)`,
    borderRadius: '2px',
    color: getText('White'),
    padding: '0 16px',
    whiteSpace: 'nowrap',
    fontWeight: 400,
    lineHeight: 2.6,
    '&:focus': {
      outline: 'rgba(0,0,0,.8) auto 3px',
    },
  },
}

const Input = ({ children, value = '', onChange, sheet: { classes } }) => (
  <input onChange={onChange} value={value} className={classes.input}>
    {children}
  </input>
)

Input.propTypes = {
  sheet: PropTypes.object,

  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default useSheet(styles)(Input)
