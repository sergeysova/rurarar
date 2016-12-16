import { jss } from './jss'
import normalize from './normalize'

// base styles
export default () => jss.createStyleSheet({
  '@global': {
    ...normalize,
  },
}, { meta: 'base-styles' })