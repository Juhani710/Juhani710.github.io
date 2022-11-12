import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: '朱浩的个人博客',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'Juhani',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    series: {
      '/vuepress-theme-reco/': [
        {
          text: '基础',
          children: [ 'introduce', 'usage' ]
        },
        {
          text: '高级',
          children: [ 'home', 'series', 'comments' ]
        }
      ]
    },
    autoSetBlogCategories: true,         // 自动设置分类
    autoAddCategoryToNavbar: true,
    navbar:
    [
      { text: '相关网站',
      	children: [
      	  { text: 'github', link: 'https://github.com/Juhani710' },
      	  { text: '知乎', link: 'https://www.zhihu.com/people/zhu-hao-42-9-73' },	
          { text: '豆瓣', link: 'https://www.douban.com/people/174832616/?_i=8250426CWe3oiW' },
      	  { text: 'bilibili', link: 'https://space.bilibili.com/341400554?spm_id_from=333.1007.0.0' },
      	]
       },
    ],
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
        hideComments: true, // 全局隐藏评论，默认 false

      },
    },
//    bulletin: {
//      body: [
//        {
//          type: 'text',
//          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
//          style: 'font-size: 12px;'
//        },
//        {
//          type: 'hr',
//        },
//        {
//          type: 'title',
//          content: 'QQ 群',
//        },
//        {
//          type: 'text',
//          content: `
//          <ul>
//            <li>QQ群1：1037296104</li>
//            <li>QQ群2：1061561395</li>
//            <li>QQ群3：962687802</li>
//          </ul>`,
//          style: 'font-size: 12px;'
//        },
//        {
//          type: 'hr',
//        },
//        {
//          type: 'title',
//          content: 'GitHub',
//        },
//        {
//          type: 'text',
//          content: `
//          <ul>
//            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
//            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
//          </ul>`,
//          style: 'font-size: 12px;'
//        },
//        {
//          type: 'hr',
//        },
//        {
//          type: 'buttongroup',
//          children: [
//            {
//              text: '打赏',
//              link: '/docs/others/donate.html'
//            }
//          ]
//        }
//      ],
//    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
