// vue.config.js
module.exports = {
  devServer: {
    port: 8090,
    disableHostCheck: true
  },
  outputDir: __dirname + '/../server/admin',
  publicPath: '/'
}