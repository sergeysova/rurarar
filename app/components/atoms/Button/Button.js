import styled from 'styled-components'

import { getColor, getText, shadowLevels, transitions, flatValues } from 'styles/palette'


const Button = styled.button`
  display: inline-flex;
  flex-flow: row nowrap;
  background-color: ${getColor('Light Blue')};
  border: none;
  border-radius: 2px;
  color: ${getText('Black')};
  box-shadow: ${shadowLevels.button};
  padding: 0 16px;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
  line-height: 2.6;
  transition: ${flatValues({
    'box-shadow': transitions.quick,
    'background-color': transitions.quick,
  })};

  &:hover {
    box-shadow: ${shadowLevels.buttonHover};
    background-color: ${getColor('Light Blue', 600)};
  }

  &:focus {
    outline: rgba(0,0,0,.8) auto 3px;
  }
`

export default Button
