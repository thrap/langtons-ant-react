var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: {
    ant: [
      'webpack-dev-server/client?http://localhost:6001',
      'webpack/hot/only-dev-server',
      './ant'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist/dev'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
    ]
  }
};