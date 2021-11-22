const headConfig = require('./config/headConfig')
const pluginsConfig = require('./config/pluginsConfig')
const sidebarConfig = require('./config/sidebarConfig')
// const navConfig = require('./config/navConfig')
const navConfig = require('./nav')


module.exports = {
  // base: "/vue-press/",
  // 导航栏标题
  title: '我的个人网',
  // 网站的描述
  description: '我的个人网,第二次!',
  head: headConfig,
  plugins: pluginsConfig,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 导航栏Logo
    logo: '/img/hero.png',
    // 自动显示侧栏
    // sidebar: 'auto',
    // 是否显示序号
    smoothScroll: true,
    // 更新时间
    lastUpdated: '更新时间',
    // 导航栏链接
    nav: navConfig,
    // sidebar: sidebarConfig,
    // displayAllHeaders: true // 默认值：false
  }
}