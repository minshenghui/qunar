const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
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