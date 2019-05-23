let merge = require('webpack-merge')
let base = require('./webpack.base.js')

module.exports = merge(base,{
  mode: 'development',
  devServer: {
    port: 9999,
    host: '127.0.0.1',
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
})