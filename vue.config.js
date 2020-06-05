module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',

  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // ESLint
  lintOnSave: true,

  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: false
  },

  css: {
    extract: false
  }

  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // 启用 runtime 模式
  //       vue$: 'vue/dist/vue.esm.js'
  //     }
  //   }
  // }

}
