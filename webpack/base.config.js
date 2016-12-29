const { join, resolve } = require('path')

const root = join(__dirname, '..')

module.exports = {
  entry: '../src/client',
  outputPath: resolve(root, 'dist'),
  context: resolve(root, 'app'),
  port: 4500,
}
