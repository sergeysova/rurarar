import { jss } from './jss'
import normalize from './normalize'
import baseStyles from './base'

import { styles } from './mixins'

// base styles
export default jss.createStyleSheet({
  '@global': {
    ...normalize,
    ...baseStyles,
  },
  ...styles,
}, { meta: 'base-styles' })
