let merge = require('webpack-merge')
let base = require('./webpack.base.js')

module.exports = merge(base,{
  mode: 'development',
  devServer: {
    port: 9999,
    host: '127.0.0.1',
    hot: true,
    open: true
  }
})