const secret = require('./secret');
const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
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
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
    },
    '@vuepress/back-to-top': {

    },
    '@vuepress/google-analytics': {
        'ga': secret.ga // UA-00000000-0
    }

}