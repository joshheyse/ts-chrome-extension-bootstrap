const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require('./package.json');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background/index.ts',
    content: './src/content/index.ts',
    popup: './src/popup/index.tsx'
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
    new CopyWebpackPlugin([{
      from: 'static/',
      transform: (content, path) => {
        if(/static\/manifest.json$/.test(path)) {
          const manifest = JSON.parse(content);
          manifest.version = package.version;
          return JSON.stringify(manifest, null, 2);
        }
        else {
          return content;
        }
      }
    }])
  ]
}
