const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    `${SRC_DIR}/index.jsx`,
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/public/',
  },
  module: {
    loaders: [
      { test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
