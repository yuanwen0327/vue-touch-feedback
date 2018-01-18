const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  entry: {
    'vue-touch-feedback': resolve("src/index.js")
  },
  devtool: 'source-map',
  output: {
    path: resolve('/lib'),
    filename: '[name].js',
    library: 'VueTouchFeedback',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ]
};