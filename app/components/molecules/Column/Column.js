import styled from 'styled-components'
import { PropTypes } from 'react'

import Tag from 'components/atoms/Tag'
import { Types, allMixins } from 'styles/mixins'


const Column = styled(Tag)`
  display: flex;
  flex-direction: column;
  ${allMixins}
`

Column.propTypes = {
  ...Types,
}

export default Column
