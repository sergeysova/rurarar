import { HotModuleReplacementPlugin, optimize } from 'webpack'
const { OccurrenceOrderPlugin } = optimize
import config from './base.config'
import loaders from './loaders'


export default {
  target: 'web',
  devtool: 'eval-source-map',
  context: config.context,
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
  modules: {
    loaders,
  },
  plugins: [
    new OccurrenceOrderPlugin(true),
    new HotModuleReplacementPlugin(),
  ],
  port: config.port,
}
