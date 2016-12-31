import styled, { css } from 'styled-components'
import { PropTypes } from 'react'

import Tag from 'components/atoms/Tag'
import { Types, allMixins } from 'styles/mixins'


const Layout = styled(Tag)`
  display: flex;
  ${allMixins}
  ${({ direction }) => direction && css`flex-direction: ${direction};`}
`

Layout.propTypes = {
  ...Types,
  direction: PropTypes.oneOf(['column', 'row']),
}

export default Layout
