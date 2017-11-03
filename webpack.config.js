const webpack = require('webpack')
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin')

isProduction = process.argv.indexOf('-p') !== -1, // Check if we are in production mode
  extractStyles = new ExtractTextPlugin('styles.css')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = env => {
  const config = {
    devtool: isProduction ? undefined : 'cheap-module-source-map',
    entry: {
      'main': APP_DIR + '/index.jsx',
      'config': APP_DIR + '/config',
      'lang': APP_DIR + '/assets/lang/lang',
      'vendor': [
        'preact',
        'preact-compat',
        'react-ink',
        'react-router-dom'
      ]
    },
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js'
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
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: isProduction ? extractStyles.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }) : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico|xml)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]?[hash]'
          }
        }
      ]
    },
    'resolve': {
      'alias': {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      },
      'modules': [
        APP_DIR + '/assets/lang/',
        'node_modules'
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development')
        }
      }),
      isProduction ? extractStyles : new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'config', 'lang']})
    ]
  }

  if (isProduction) {
    config.plugins[config.plugins.length] = new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src', 'assets', 'icons'), to: path.join(__dirname, 'dist', 'assets', 'icons') }
    ])
  }

  if (env && env.compress) {
    config.plugins[config.plugins.length] = new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(html|js|css|png|jpg|json|svg|xml)$/
    })
  }

  return config
}
