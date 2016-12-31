import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Column } from 'components/molecules'
import { getColor } from 'styles/palette'


const FooterContainer = styled(Column)`
  background-color: ${getColor('Light Blue')};
  line-height: 80px;
  color: ${getColor('White', 'Hint')};
`

const Footer = ({ className }) => (
  <FooterContainer tag="footer" justifyContent="center" alignItems="center" className={className}>
    RuRaRaR
  </FooterContainer>
)

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
