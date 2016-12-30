import { PropTypes } from 'react'


export const styles = {
  justifyContent_flexStart: { justifyContent: 'flex-start' },
  justifyContent_flexEnd: { justifyContent: 'flex-end' },
  justifyContent_center: { justifyContent: 'center' },
  justifyContent_spaceAround: { justifyContent: 'space-around' },
  justifyContent_spaceBetween: { justifyContent: 'space-between' },

  alignItems_flexStart: { alignItems: 'flex-start' },
  alignItems_flexEnd: { alignItems: 'flex-end' },
  alignItems_center: { alignItems: 'center' },
  alignItems_baseline: { alignItems: 'baseline' },
  alignItems_stretch: { alignItems: 'stretch' },

  padding_XS: { padding: '4px' },
  padding_S: { padding: '8px' },
  padding_M: { padding: '14px' },
  padding_L: { padding: '24px' },
}

export const Types = {
  justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceAround', 'spaceBetween']),
  alignItems: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
  padding: PropTypes.oneOf(['XS', 'S', 'M', 'L']),
}

export const all = ['justifyContent', 'padding', 'alignItems']

/**
 *
 * @param {Object} props          Incoming props
 * @param {Object}  classes       Object of classes (from JSS)
 * @param {Array<String>}  list   List of configured props
 * @returns {String}              String with classes
 */
export function selectClasses(props, classes, list, additional = []) {
  return list
    .map(prop => props[prop] && classes[`${prop}_${props[prop]}`])
    .concat(additional)
    .filter(e => !!e)
    .join(' ')
}
