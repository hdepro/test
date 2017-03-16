var path = require('path');
var webpack = require('webpack');
//var historyApiFallback = require('connect-history-api-fallback');
var node_modules = path.resolve('../', 'node_modules');
var path_React = path.resolve(node_modules, 'react/dist/react.min.js');
var path_ReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var path_ReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');
var path_polyfill = path.resolve(node_modules, 'babel-polyfill/dist/polyfill.min.js');

module.exports = {
  entry: {
  index: './index.js',
  //common: ['react','react-router','babel-polyfill']
  },
  resolve: {
    alias: {
      'react': path_React,
      'react-router':path_ReactRouter,
      'babel-polyfill':path_polyfill,
      'react-dom': path_ReactDOM
    },
    extensions: ['','.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
      publicPath: 'http://localhost:8080/test/code-splitting/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // }),
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //new webpack.optimize.CommonsChunkPlugin('shared.js')
    //new webpack.ProvidePlugin({
    //  react: "react"
    //})
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.jsx$/,
        loaders: ['react-hot' ,'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test:/\.scss$/,
        loaders:['style','css','sass'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};





