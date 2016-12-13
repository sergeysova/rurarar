const { resolve } = require('path')
const { Module } = require('module')

global.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.NODE_PATH = resolve(__dirname, '..', 'src')
Module._initPaths()

global.__PRODUCTION__ = NODE_ENV == 'production'
global.__DEVELOPMENT__ = NODE_ENV == 'development'

require('babel-register')({
  ignore: /node_modules/,
})
