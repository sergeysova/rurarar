import { join, resolve } from 'path'

const root = join(__dirname, '..')

export default {
  entry: resolve('src/client.js'),
  outputPath: resolve(root, 'dist'),
  port: 4500,
}
