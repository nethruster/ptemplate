const webpack = require('webpack')
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  isProduction = process.argv.indexOf('-p') !== -1 // Check if we are in production mode

const BASE_URL="/" 
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = env => {
  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: {'main': APP_DIR + '/index.jsx'},
    target: 'web',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /preact|preact-compat|react-ink|react-router-dom/,
            chunks: 'initial',
            name: 'vendor'
          }
        }
      }
    },
    output: {
      path: BUILD_DIR,
      publicPath: BASE_URL,
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
      rules: [
        {test: /\.jsx?$/, include: APP_DIR, loader: 'babel-loader'}, {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, {loader: 'css-loader'},
            {loader: 'postcss-loader'}, {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico|xml)$/,
          loader: 'file-loader',
          options: {name: '/assets/[name].[ext]?[hash]'}
        }
      ]
    },
    'resolve': {
      'alias': {'react': 'preact-compat', 'react-dom': 'preact-compat'},
      'modules': [APP_DIR + '/assets/lang/', 'node_modules']
    },
    plugins: [
      new webpack.DefinePlugin({
        __BASE__: JSON.stringify(BASE_URL) 
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[hash:6].css',
        chunkFilename: '[name]-[hash:6].css',
        cssModules: true,
        hot: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(), new HtmlWebpackPlugin({
        minify: {collapseWhitespace: true, removeComments: true},
        hash: true,
        template: './src/index.html'
      })
    ]
  }

  if (isProduction) {
    config.plugins[config.plugins.length] = new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src', 'assets', 'icons'), to: path.join(__dirname, 'dist', 'assets', 'icons') },
      { from: path.join(__dirname, 'src', 'assets', 'lang'), to: path.join(__dirname, 'dist', 'assets', 'lang') },
      { from: path.join(__dirname, 'src', 'config.js'), to: path.join(__dirname, 'dist', 'config.js') }
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
