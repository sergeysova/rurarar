import React, { PropTypes } from 'react'
import { useSheet } from 'styles/jss'
import { getColor, getText, shadowLevels, transitions, flatValues } from 'styles/palette'

const styles = {
  button: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    backgroundColor: getColor('Light Blue'),
    border: 'none',
    borderRadius: '2px',
    color: getText('Black'),
    boxShadow: shadowLevels.button,
    padding: '0 16px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    fontWeight: 600,
    lineHeight: 2.6,
    transition: flatValues({
      'box-shadow': transitions.quick,
      'background-color': transitions.quick,
    }),
    '&:hover': {
      boxShadow: shadowLevels.buttonHover,
      backgroundColor: getColor('Light Blue', 600),
    },
    '&:focus': {
      outline: 'rgba(0,0,0,.8) auto 3px',
    },
  },
}

const Button = ({ children, onClick, sheet: { classes } }) => (
  <button onClick={onClick} className={classes.button}>
    {children}
  </button>
)

Button.propTypes = {
  sheet: PropTypes.object,

  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default useSheet(styles)(Button)
