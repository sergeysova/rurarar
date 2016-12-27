import Material from 'google-material-color'

export function getColor(color, shade = 500) {
  return Material.get(color, shade)
}

const shadowLevels = {
  appBar: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)',
}

export function getShadow(name) {
  if (typeof shadowLevels[name] === 'undefined') {
    throw new TypeError(`Shadow "${name}" not found! Available shadows: ${Object.keys(shadowLevels).join(', ')}`)
  }

  return shadowLevels[name]
}

export function getText(...args) {
  return Material.getText(...args)
}

