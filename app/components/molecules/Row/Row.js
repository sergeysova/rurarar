import styled from 'styled-components'
import { PropTypes } from 'react'

import Tag from 'components/atoms/Tag'
import { Types, allMixins } from 'styles/mixins'


const Row = styled(Tag)`
  display: flex;
  flex-direction: row;
  ${allMixins}
`

Row.propTypes = {
  ...Types,
}

export default Row
