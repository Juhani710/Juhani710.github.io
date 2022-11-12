---
home: true
modules:
  - Banner
  - BannerBrand
  - Blog
  - MdContent
  - Footer
banner: # banner 模块的配置
  heroText: Juhani’s world
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 400px
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: HELLO！Welcome here
  tagline: 恭喜您发现了一个宝藏，您可以自由地探索
  buttons:
    - { text: 个人简介, link: '/docs/guide/introduce' }
    - { text: 打赏, link: '/docs/style-default-api/introduce', type: 'plain' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
blog: # blog 模块的配置
  socialLinks: # 社交 icon 请到 [Xions](https://www.xicons.org/#/zh-CN) 页面的 tabler 下获取，复制名称即可
    - { icon: 'BrandGithub', link: 'https://github.com/Juhani710' }
    
---

