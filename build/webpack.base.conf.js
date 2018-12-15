const path = require('path')
const config = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('css/[name].css');
const rootPath = path.resolve(__dirname, '..')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
      config.build.assetsSubDirectory :
      config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
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
    extensions: ['.js', '.css', '.json', '.jsx'],
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
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          }
        },
        include: path.join(rootPath, 'src'),
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
        name: assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.mp4(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    ]
  },
  plugins:[
    extractCSS,
  ]
}
