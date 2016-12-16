import { resolve } from 'path'
import { HotModuleReplacementPlugin, optimize, DefinePlugin } from 'webpack'
const { OccurrenceOrderPlugin } = optimize
import config from './base.config'
import { loaders } from './loaders'


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
  module: {
    loaders,
  },
  resolve: {
    root: resolve(__dirname, '..', 'src'),
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __CLIENT__: true,
      __SERVER__: false,
    }),
    new OccurrenceOrderPlugin(true),
    new HotModuleReplacementPlugin(),
  ],
  port: config.port,
}
