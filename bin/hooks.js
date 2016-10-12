const { resolve } = require('path')
const { Module } = require('module')

process.env.NODE_PATH = resolve(__dirname, '..', 'src')
Module._initPaths()

require('babel-register')({
  ignore: /node_modules/,
})
