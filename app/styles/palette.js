import Material from 'google-material-color'


export function getColor(color, shade = 500) {
  return Material.get(color, shade)
}

export const shadowLevels = {
  button: '0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24)',
  buttonHover: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)',
  appBar: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)',
}

export const transitions = {
  quick: '.2s cubic-bezier(.4,0,.2,1)',
}

export function getText(...args) {
  return Material.getText(...args)
}

/**
 * Convert { a: '123', b: '456' } to 'a 123, b 456'
 * @param  {Object} object [description]
 * @return {String}        [description]
 */
export function flatValues(object) {
  return Object.keys(object)
    .map(key => `${key} ${object[key]}`)
    .join(', ')
}
