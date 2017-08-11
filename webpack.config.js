const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background/index.ts',
    content: './src/content/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static/' }
    ])
  ]
}
