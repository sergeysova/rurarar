import { PropTypes } from 'react'

export const justifyContent = {

}

export const alignItems = {

}

export const marginBetween = {

}

export const padding = {

}

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

  marginBetween_XS: { '& > * + *': { marginLeft: '4px' } },
  marginBetween_S: { '& > * + *': { marginLeft: '8px' } },
  marginBetween_M: { '& > * + *': { marginLeft: '14px' } },
  marginBetween_L: { '& > * + *': { marginLeft: '24px' } },

  padding_XS: { padding: '4px' },
  padding_S: { padding: '8px' },
  padding_M: { padding: '14px' },
  padding_L: { padding: '24px' },
}

export const Types = {
  justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceAround', 'spaceBetween']),
  alignItems: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
  marginBetween: PropTypes.oneOf(['XS', 'S', 'M', 'L']),
  padding: PropTypes.oneOf(['XS', 'S', 'M', 'L']),
}

/**
 *
 * @param {Object} props          Incoming props
 * @param {Object}  classes       Object of classes (from JSS)
 * @param {Array<String>}  list   List of configured props
 * @returns {String}              String with classes
 */
export function selectClasses(props, classes, list) {
  return list
    .map(prop => props[prop] && classes[`${prop}_${props[prop]}`])
    .filter(e => !!e)
    .join(' ')
}
