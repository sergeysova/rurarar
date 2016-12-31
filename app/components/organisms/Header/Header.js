import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import { getColor, shadowLevels } from 'styles/palette'


const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: ${getColor('Light Blue')};
  line-height: 64px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  box-shadow: ${shadowLevels.appBar};
  user-select: none;
  cursor: default;
  z-index: 10;
`

const HomeLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
`

const FullTitle = styled.div`
  display: flex;

  @media (max-width: 550px) {
    display: none;
  }
`

const ShortTitle = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: flex;
  }
`

const Header = () => (
  <HeaderWrapper>
    <HomeLink to="/">
      <FullTitle>React Universal Recomposed Application with Redux And Redial</FullTitle>
      <ShortTitle>RURARAR</ShortTitle>
    </HomeLink>
  </HeaderWrapper>
)

export default Header
