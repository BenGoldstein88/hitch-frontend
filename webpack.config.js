// var path = require('path')
// var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
  './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  plugins: [HTMLWebpackPluginConfig],

  module: {
    loaders: [
      {
        test: /\.js?$/, exclude: /node_modules/,
        loaders: ['babel-loader']
        // query: {plugins: 'react-html-attrs'}
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack'
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
        'file?name=/fonts/endor/[name].[ext]',
        "file-loader"
        ]
      }
    ]
  }
};
