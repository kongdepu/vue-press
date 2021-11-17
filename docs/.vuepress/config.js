const moment = require('moment');
moment.locale("zh-cn")


module.exports = {
  // base: "/vue-press/",
  // 导航栏标题
  title: '我的个人网',
  // 网站的描述
  description: '我的个人网,第二次!',
  head: [
    // 增加一个自定义的 favicon.io
    ['link', { rel: 'icon', href: '/img/hero.png' }],
    ['meta', { name: 'author', content: 'kongdepu' }],
    ['meta', { name: 'keywords', content: 'vuepress初识' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL")
        }
      },
    ]
    
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 导航栏Logo
    logo: '/img/hero.png',
    // 自动显示侧栏
    sidebar: 'auto',
    // 是否显示序号
    smoothScroll: true,
    // 更新时间
    lastUpdated: '更新时间',
    // 导航栏链接
    nav:
      [
        { text: '介绍', link: '/guide/' },
        { text: '起步', link: '/start/' },
        { text: 'External', link: 'https://google.com' },
      ],
    sidebar: {
      '/guide/': [
        '',
        'start',
      ],
      '/start/': [
        '',
        'ES6',
      ]
    }
    // displayAllHeaders: true // 默认值：false
  }
}