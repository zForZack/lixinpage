module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: 'static',
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个跨域
      "/api": {
        target: "http://192.168.2.69:8080",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api": "/static/mock"
        }
      }
    }
  }
}



