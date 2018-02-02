var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var webpackConfig = merge(baseWebpackConfig, {
  plugins:[
    new BundleAnalyzerPlugin()
  ]
})

module.exports = webpackConfig