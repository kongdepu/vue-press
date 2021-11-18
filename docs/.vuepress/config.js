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
    ['meta', { name: 'keywords', content: 'vuepress初识' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/icon-152x152.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icons-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => moment(timestamp).format("LLLL")
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容",
        buttonText: "刷新"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'kongdepu',
      repo: 'vue-press',
      clientId: '17c922fc0f7d550a4811',
      clientSecret: '0c47b996598eb76af958484968ee9295656d427a',
    },

  },
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