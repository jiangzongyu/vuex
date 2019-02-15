module.exports = {
  // baseUrl: type:{string} default '/'
  // 将部署应用程序的基本URL
  // 默认情况下，VueCLI假设您的应用程序部署在域的根目录下，
  // https://www.my-app.com/ 如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，即baseUrl 到 /my-app
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  baseUrl: '/',
  // outputDir: 在npm run build 时 生成的目录 type: string, default: 'dist'
  outputDir: '../crm/views',
  // pages: { type:{Object}, default: undefined}
  // 构建多页面应用时程序时，每个“页面”都该有一个相应的JavaScript条目文件。该值应该是一个对象，其中键是该条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目的字符串。注意：请保证pages里面配置的路径和文件名 在你的文档目录下都存在 否则启动服务会报错
  /*pages: {
    index: {
      // entry for the page
      entry: 'src/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html'
    },
    // when using the entry-only string format,
    // template is inferred to be  'public/subpage.html' and falls back to 'public/index.html' if not found 这句话的意识是说当只指定字符串格式的key：value时，例如指定 subpage: 'src/subpage/main.js' 那么template字段会被推断为 public/subpage.html 如果找不到则转而使用public/index.html
    // output filename is inferred to be 'subpage.html'
    subpage: 'src/subpage/main.js'
  },*/
  // lintOnSave: true,
  lintOnSave: false, // 是否在保存时使用eslint
  // productionSourceMap: { type<Boolean Default true> } 盛产源映射，如果不需要生产时的映射源，那么将此置为false可加速构建
  productionSourceMap: false,

  // devServer: { type: Object } 3个属性host, port, https 它支持webpack-dev-server的所有选项
  devServer: {
    port: 8085,
    host: 'localhost',
    https: false,
    open: true,
    // proxy: 'http://localhost:4000' 配置跨域代理，只有一个代理时
    proxy: {
      // 配置多个代理
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'

      }
    }
  }
}
