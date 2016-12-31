import { PropTypes } from 'react'
import { css } from 'styled-components'


const namesMapping = {
  justifyContent: 'justify-content',
  alignItems: 'align-items',

  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',

  XS: '4px',
  S: '8px',
  M: '14px',
  L: '24px',
}

export const mapStyle = propName => props => {
  if (props[propName]) {
    const value = props[propName]
    return css`${namesMapping[propName] || propName}: ${namesMapping[value] || value}`
  }

  return ''
}

export const allMixins = css`
  ${mapStyle('justifyContent')}
  ${mapStyle('alignItems')}
  ${mapStyle('padding')}
`

export const Types = {
  justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceAround', 'spaceBetween']),
  alignItems: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
  padding: PropTypes.oneOf(['XS', 'S', 'M', 'L']),
}
