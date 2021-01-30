
module.exports = {
  title: '欢迎光临，请品茶',
  description: 'Walker.Wu的个人站点',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/hiniwo/newblog',
    repoLabel: 'Github',
  	nav: [
		  { text: '前端基本功', items:[
		  	{ text: '编辑器', link: '/idea/' },
			]},
		  { text: 'JS高级进阶', link: '/jshigh/' },
		  { text: '框架相关', items: [
			  { text: 'Vue', link: '/vue/' },
			  { text: 'React', link: '/react/'},
		  	]
		  },
		{ text: '随记', link: '/random/' },
		{ text: '生活', link: '/living/' }
	  ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
}
