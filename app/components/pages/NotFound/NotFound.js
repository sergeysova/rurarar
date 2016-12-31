import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { namesMapping } from 'styles/mixins'


const NotFoundWrapper = styled.div`
  display: flex;
  padding: ${namesMapping.L}
  justifyContent: center;
  font-size: 32px;
  align-items: center;
`

const NotFound = () => (
  <NotFoundWrapper>
    Page not found!
  </NotFoundWrapper>
)

export default NotFound
