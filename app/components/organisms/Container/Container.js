import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Column, Row } from 'components/molecules'


const Content = styled(Row)`
  min-height: 84vh;
  background: white;
  justify-content: center;
`

const BaseContainer = styled(Column)`
  max-width: 800px;
  width: 100%;
`

const Container = ({ className, children }) => (
  <Content className={className}>
    <BaseContainer>
      {children}
    </BaseContainer>
  </Content>
)

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container
