module.exports = {
    // 插件：置顶按钮、图片缩放
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
    // 自定义网站 favicon
    head: [['link', { rel: 'icon', href: '/img/logo.png' }]],
    // 根路径，和仓库名一致
    base: '',
    // 左上角标题
    title: 'life-long-learning',
    // markdown 相关配置
    markdown: {
      // 代码块行号
      lineNumbers: true,
    },
    // 默认主题相关配置
    themeConfig: {
      // 配置左上角的 logo
      logo: '/img/logo.png',
      // 导航栏
      nav: require('./nav.js'),
      // 侧边栏
      sidebar: require('./sidebar.js'),
      // sidebar: 'auto',
      // 标题深度，2 表示提取 h2 和 h3 标题
      sidebarDepth: 2,
      // 启用页面滚动效果
      smoothScroll: true,
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
      nextLinks: true,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      prevLinks: true,
      // 导航栏显示 gitee 仓库
      repo: 'https://gitee.com/xiehongchen/xiehongchen.gitee.io',
      repoLabel: 'Gitee',
    },
  }