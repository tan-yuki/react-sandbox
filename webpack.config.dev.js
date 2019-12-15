const path = require('path');

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',

  entry: src + '/index.js',

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ],
  },

  resolve: {
    extensions: ['*', '.js']
  },

  devtool: 'source-map',
};
