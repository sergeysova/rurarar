const { resolve } = require('path')
const { readFileSync } = require('fs')
const babel = JSON.parse(readFileSync(resolve(__dirname, '..', '.babelrc')))

if (global.NODE_ENV !== 'production') {
  babel.presets.push('react-hmre')
}

exports.loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: Object.assign({}, babel, { cacheDirectory: true, highlightCode: false, }),
  },
]
