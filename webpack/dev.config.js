import { HotModuleReplacementPlugin, optimize } from 'webpack'
const { OccurrenceOrderPlugin } = optimize
import config from './base.config'


export default {
  devtool: 'eval',
  entry: {
    main: [
      'webpack-hot-middleware/client',
      config.entry,
    ],
  },
  cache: true,
  output: {
    path: config.outputPath + '/',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new OccurrenceOrderPlugin(true),
    new HotModuleReplacementPlugin(),
  ],
  port: config.port,
}
