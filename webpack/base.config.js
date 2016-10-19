const { join, resolve } = require('path')

const root = join(__dirname, '..')

module.exports = {
  entry: './client',
  outputPath: resolve(root, 'dist'),
  context: resolve(root, 'src'),
  port: 4500,
}
