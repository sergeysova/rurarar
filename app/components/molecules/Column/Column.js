import styled, { css } from 'styled-components'
import { PropTypes } from 'react'

import Tag from 'components/atoms/Tag'
import { Types, allMixins, sizes } from 'styles/mixins'


const Column = styled(Tag)`
  display: flex;
  flex-direction: column;
  ${allMixins};
  ${({ marginBetween }) => marginBetween &&
    css`& > :not(:first-child) { margin-top: ${(sizes[marginBetween] || marginBetween)} }`
  }
`

Column.propTypes = {
  ...Types,
  marginBetween: PropTypes.oneOf(Object.keys(sizes)),
}

export default Column
