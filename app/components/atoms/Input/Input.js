import styled from 'styled-components'
import { PropTypes } from 'react'
import { getText } from 'styles/palette'


const Input = styled.input`
  display: inline-flex;
  flex-flow: row nowrap;
  background-color: white;
  border: 1px solid rgba(0,0,0,.4);
  border-radius: 2px;
  color: ${getText('White')};
  padding: 0 16px;
  white-space: nowrap;
  font-weight: 400;
  line-height: 2.6;

  &:focus {
    outline: rgba(0,0,0,.8) auto 3px;
  }
`

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input
