require('dotenv').config()

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    user: './k6-ebac-tests/simulations/user.test.js'
  },
  output: {
    path: path.resolve(__dirname, './k6-ebac-tests/dist'), // eslint-disable-line
    libraryTarget: 'commonjs',
    filename: '[name].test.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};
