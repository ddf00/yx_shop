const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75 //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: { //配置跨域
      '/api': {
        target: 'http://localhost:4000', 
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' 
        }
      },
      '/m': {
        target: 'http://m.you.163.com', 
        changOrigin: true, //允许跨域
        ws: true,
        secure:false,
        pathRewrite: {
          '^/m': '' 
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}