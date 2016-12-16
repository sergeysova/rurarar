import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { useSheet } from 'styles/jss'
import { getColor, getShadow } from 'styles/palette'


const styles = {
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    background: getColor('Light Blue'),
    lineHeight: '64px',
    height: '64px',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    boxShadow: getShadow('appBar'),
    userSelect: 'none',
    cursor: 'default',
  },
  homeLink: {
    display: 'flex',
    color: 'white',
    textDecoration: 'none',
  },
  long: {
    display: 'flex',
  },
  short: {
    display: 'none',
  },
  '@media (max-width: 550px)': {
    long: {
      display: 'none',
    },
    short: {
      display: 'flex',
    },
  },
}

const Header = ({ sheet: { classes } }) => (
  <header className={classes.header}>
    <Link to="/" className={classes.homeLink}>
      <div className={classes.long}>React Universal Recomposed Application with Redux And Redial</div>
      <div className={classes.short}>RURARAR</div>
    </Link>
  </header>
)

Header.propTypes = {
  sheet: PropTypes.object,
}

export default useSheet(styles)(Header)
