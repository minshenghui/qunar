const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: '1997'
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('Common', resolve('src/pages/Common'))
  },
  runtimeCompiler: true
  // proxyTable: {
  //   '/api': {
  //     target: 'http://locahost:8080',
  //     pathRewrite: {
  //       '^/api': '/public/api'
  //     }
  //   }
  // }
}