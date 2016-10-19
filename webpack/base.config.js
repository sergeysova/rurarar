import { join, resolve } from 'path'

const root = join(__dirname, '..')

export default {
  entry: './client',
  outputPath: resolve(root, 'dist'),
  context: resolve(root, 'src'),
  port: 4500,
}
