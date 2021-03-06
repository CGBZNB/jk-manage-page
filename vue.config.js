const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port:8080,  // 端口号的配置
		open:true,  // 自动打开浏览器
    proxy:{
      '/api':{
        target: 'http://127.0.0.1:8081/',     
      }
    }
  }
})
