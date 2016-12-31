import { join } from 'path'
import { HotModuleReplacementPlugin, optimize, DefinePlugin, LoaderOptionsPlugin } from 'webpack'

import config from './base.config'
import { rules } from './loaders'

const { OccurrenceOrderPlugin } = optimize


export default {
  target: 'web',
  devtool: 'source-map',
  context: config.context,
  entry: {
    main: config.entry,
  },
  cache: true,
  output: {
    path: join(__dirname, '..', 'dist') + '/',
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules,
  },
  resolve: {
    modules: [
      join(__dirname, '..', 'app'),
      'node_modules',
    ],
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        context: config.context,
      },
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __CLIENT__: true,
      __SERVER__: false,
    }),
    new OccurrenceOrderPlugin(true),
    new HotModuleReplacementPlugin(),
  ],
}
