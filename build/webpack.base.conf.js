const path = require('path')
const utils = require('./utils')
const config = require('../config')
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('css/[name].css');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: [ `./src/front/index.js`],
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
      'assets': resolve('src/front/assets'),
      'actions': resolve('src/front/actions'),
      'data': resolve('src/front/data'),
      'reducers': resolve('src/front/reducers'),
      'tmpl': resolve('src/front/tmpl'),
      'modules': resolve('src/front/modules'),
      'store': resolve('src/front/store'),
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
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    },
    {
      test: /\.css$/,
      use: extractCSS.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
      }),
    },
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
  },
  plugins:[
    extractCSS,
  ]
}
