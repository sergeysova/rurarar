import { css } from 'styled-components'

import { getColor } from './palette'


export default css`
  body {
    background-color: ${getColor('Light Blue')};
    margin: 0;
    padding: 0;
  }
  a {
    color: ${getColor('Light Blue', 700)};
    text-decoration: 'none';
  },
  a:hover {
    color: ${getColor('Light Blue', 900)};
  }
`
