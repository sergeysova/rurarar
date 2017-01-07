import styled, { css } from 'styled-components'
import { PropTypes } from 'react'

import Tag from 'components/atoms/Tag'
import { Types, allMixins, sizes } from 'styles/mixins'


const Row = styled(Tag)`
  display: flex;
  flex-direction: row;
  ${allMixins};
  ${({ marginBetween }) => marginBetween &&
    css`& > :not(:first-child) { margin-left: ${(sizes[marginBetween] || marginBetween)} }`
  }
`

Row.propTypes = {
  ...Types,
  marginBetween: PropTypes.oneOf(Object.keys(sizes)),
}

export default Row
