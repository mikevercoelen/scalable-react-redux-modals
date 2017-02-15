const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: buildPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};
