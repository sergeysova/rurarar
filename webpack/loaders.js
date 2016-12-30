const { resolve } = require('path')
const { readFileSync } = require('fs')

const babel = JSON.parse(readFileSync(resolve(__dirname, '..', '.babelrc')))

if (process.env.NODE_ENV !== 'production') {
  babel.presets.push('react-hmre')
}

exports.rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: Object.assign({}, babel, { cacheDirectory: true, highlightCode: false }),
      },
    ],
  },
]
