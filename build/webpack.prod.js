const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')

module.exports = merge(base,{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash].js"
  }
})