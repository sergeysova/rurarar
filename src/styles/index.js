import { jss } from './jss'
import normalize from './normalize'
import baseStyles from './base'

// base styles
export default () => jss.createStyleSheet({
  '@global': {
    ...normalize,
    ...baseStyles,
  },
}, { meta: 'base-styles' })
