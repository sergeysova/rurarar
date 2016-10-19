const { HotModuleReplacementPlugin, optimize: { OccurrenceOrderPlugin, DedupePlugin, UglifyJsPlugin } } = require('webpack')
const config = require('./base.config')

module.exports = {
  target: 'web',
  context: config.context,
  entry: {
    main: [
      config.entry,
    ],
  },
  output: {
    path: config.outputPath + '/',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new DedupePlugin(),
    new OccurrenceOrderPlugin(true),
    new UglifyJsPlugin({ compress: { warnings: false } }),
  ],
}
