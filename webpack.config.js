const webpack = require('webpack');
  path = require('path'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),

  isProduction = process.argv.indexOf('-p') !== -1, // Check if we are in production mode
  extractStyles = new ExtractTextPlugin('styles.css');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  devtool: isProduction ? undefined : 'cheap-module-source-map',  
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'ptemplate.js'
  },
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port: 3000,
    contentBase: './src',
    stats: 'minimal',
    hot: true,
    inline: true
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: isProduction ? extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }) : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]',
        },
      },
    ]
  },
  plugins: [
    isProduction ? extractStyles : new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
