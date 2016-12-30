import React, { PropTypes } from 'react'
import cn from 'classnames'
import { compose } from 'recompose'

import { useSheet } from 'styles/jss'
import { getColor } from 'styles/palette'

import { Column } from 'components/atoms'


const styles = {
  footer: {
    background: getColor('Light Blue'),
    lineHeight: '80px',
    color: getColor('White', 'Hint'),
  },
}

const enhance = compose(
  useSheet(styles),
)

const Footer = ({ className, sheet: { classes } }) => (
  <Column justifyContent="center" alignItems="center" tag="footer" className={cn(classes.footer, className)}>
    RuRaRaR
  </Column>
)

Footer.propTypes = {
  sheet: PropTypes.object,

  className: PropTypes.string,
}

export default enhance(Footer)
