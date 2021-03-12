module.exports = {
  publicPath: "./",
  assetsDir: 'static',
  productionSourceMap: true,
  runtimeCompiler: true ,
  devServer: {
    proxy: {  //配置跨域
      '/api': {
        target: process.env.VUE_APP_PROXY_URL,
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
}