var path = require('path')
var utils = require('./utils')
var config = require('../config')
var eslintFriendlyFormatter = require('eslint-friendly-formatter')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: [ `./src/index.js`],
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.css', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'actions': resolve('src/actions'),
      'data': resolve('src/data'),
      'reducers': resolve('src/reducers'),
      'server': resolve('src/server'),
      'modules': resolve('src/modules'),
      'store': resolve('src/store'),
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: "pre",
      include: [resolve('src'), resolve('test')],
      options: {
        formatter: eslintFriendlyFormatter
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    },
    {
        type: 'javascript/auto',
        test: /\.(json|html)/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        }],
    },
   /*  {
      test: /\.json$/,
      loader: 'raw-loader'
    }, */
    {
      test: /\.(png|jpe?g|gif|svg|tif|tiff|bmp)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.mp4(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    ]
  }
}
