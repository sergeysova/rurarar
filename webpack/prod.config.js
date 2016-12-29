const { join } = require('path')
const {
  DefinePlugin,
  LoaderOptionsPlugin,
  optimize: { DedupePlugin, UglifyJsPlugin },
} = require('webpack')

const config = require('./base.config')
const { rules } = require('./loaders')

module.exports = {
  target: 'web',
  context: config.context,
  entry: {
    main: config.entry,
  },
  output: {
    path: join(__dirname, '..', 'dist') + '/',
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
      minimize: true,
      options: {
        context: config.context,
      },
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __CLIENT__: true,
      __SERVER__: false,
    }),
    new UglifyJsPlugin({ compress: { warnings: false } }),
  ],
}
