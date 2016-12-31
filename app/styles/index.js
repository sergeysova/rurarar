import { injectGlobal } from 'styled-components'

import normalize from './normalize'
import baseStyles from './base'


export default () => injectGlobal`
  ${normalize}
  ${baseStyles}
`
