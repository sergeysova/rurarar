const { resolve } = require('path')
const { Module } = require('module')

// hook: resolve modules from src/
const NODE_ENV = process.env.NODE_ENV || 'development'
process.env.NODE_PATH = resolve(__dirname, '..', 'src')
Module._initPaths()

global.__PRODUCTION__ = NODE_ENV === 'production'
global.__DEVELOPMENT__ = NODE_ENV === 'development'
global.__CLIENT__ = false
global.__SERVER__ = true

require('babel-polyfill')
require('babel-register')({
  ignore: /node_modules/,
})
