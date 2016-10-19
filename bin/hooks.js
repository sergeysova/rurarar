const { resolve } = require('path')
const { Module } = require('module')

global.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.NODE_PATH = resolve(__dirname, '..', 'src')
Module._initPaths()

require('babel-register')({
  ignore: /node_modules/,
})
