var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var browsers = [
  '> 1%',
  'last 3 versions',
  'iOS >= 6',
  'ie >= 11'
];

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'), // store the bundled output in dist/bundle.js
    filename: 'bundle.js'                  // specifying file name for our compiled assets
  },
  resolve: {
    // required for enzyme to work properly
    alias: {
      'sinon': 'sinon/pkg/sinon'
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    // don't run babel-loader through the sinon module
    noParse: [
      /node_modules\/sinon\//
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  sassLoader: {
    sourceComments: false
  },
  postcss: [
    autoprefixer({ browsers })
  ],
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  }
}

module.exports = config;
