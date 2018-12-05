// see http://vuejs-templates.github.io/webpack for documentation.
let path = require("path");
let dis = process.argv[2] || "";

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, `../dist/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist`),
    assetsSubDirectory: "",
    assetsPublicPath: `/`,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
    //manifestFileName: 'manifest-doctor.json'
  },
  dev: {
    env: require("./dev.env"),
    port: 8778,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
    '/webserver/list/sys/study': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        pathRewrite: {
            '^/webserver/list/sys/study': '/webserver/list/sys/study'
        }
    },
    },
    cssSourceMap: false
  }
};
