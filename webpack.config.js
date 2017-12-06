const path = require('path');

const INPUTFILE = './index.js';
const OUTPUTDIR = 'dist/';

module.exports = {
  entry: {
    'index': [
      path.resolve(__dirname, INPUTFILE)
    ]
  },
  cache: true,
  output: {
    path: path.resolve(__dirname, OUTPUTDIR),
    filename: '[name].js',
    library: 'init-uuid',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ]
  }
};
