import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Column } from 'components/molecules'


const Content = styled(Column)`
  min-height: 84vh;
  background: white;
`

const BaseContainer = styled(Column)`
  min-width: 800px;
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
