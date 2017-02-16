var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//自动修补css浏览器前缀
module.exports = {
    devtool: 'eval-source-map',//生成source map以追踪js错误
    entry:  __dirname + "/index.js",//js入口
    output: {
        path: __dirname + "/server",//输出路径
        filename: "bundle.js"//输出名
    },
    module: {
        loaders: [
            {
                test: /\.js$/, //js loader
                exclude: /node_modules/,
                loader: 'babel' //更多配置在.babelrc
            },
            {
                test: /\.css$/, //css loader
                loader: 'style!css?!postcss'
                    // loader:'style!css?modules!postcss'//css模块化
            },
            //引用css中的一些字体与图像
            {
                test: /\.(woff|svg|eot|ttf|woff2)\??.*$/,
                loader: 'url?limit=2000'
            },
            //引用图像
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
      ]
    },

    devServer: {//webpack-dev-server 配置
        contentBase: "./server",//本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,
        hot:true//热更新
    },
    postcss:[
        autoprefixer({browsers:['last 10 versions']})//postcss 插件
    ],
    plugins:[
        new webpack.BannerPlugin('Copyright Chvin'),//添加 js头
        new webpack.HotModuleReplacementPlugin()//热更新
    ]
}