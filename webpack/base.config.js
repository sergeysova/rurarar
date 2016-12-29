const { join, resolve } = require('path')

const root = join(__dirname, '..')

module.exports = {
  entry: '../src/client',
  outputPath: '/dist',
  context: resolve(root, 'app'),
}
