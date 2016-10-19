const { OccurrenceOrderPlugin } = optimize
import config from './base.config'

module.exports = {
  target: 'web',
  context: config.context,
  entry: {
    main: [
      config.entry
    ],
  },
  output: {
    path: config.outputPath + '/',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new OccurrenceOrderPlugin(true),
  ],
}
