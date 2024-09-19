module.exports = {
  "base":"/BlockPage/",
  "title": "漫游者的世界",
  "description": "",
  "dest": "public",
  // 语言  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  
  "themeConfig": {
    "primaryColor": "#cd3d45",
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      // {
      //   "text": "TimeLine",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vue",
            "link": "/docs/vue/"
          },
          {
            "text": "react",
            "link": "/docs/react/"
          },
          {
            "text": "后端",
            "link": "/docs/out-end/"
          }
        ]
      },
      // {
      //   "text": "个人介绍",
      //   "icon": "iconfont icon-wodexiao",
      //   "link": "/blogs/interview.md",
      // },
      {
        "text": "个人其他网址",
        "icon": "iconfont icon-maichexianbeifen",
        "items": [
          {
            "text": "个人Github",
            "link": "https://github.com/Lihua-cpu?tab=repositories",
            "icon": "reco-github"
          },
          {
            "text": "个人Gitee",
            "link": "https://gitee.com/lin-jiantan",
            "icon": "reco-github"
          },
          {
            "text": "个人稀土",
            "link": "https://juejin.cn/user/1693677674828798",
            "icon": "iconfont icon-zhuanjiadayibeifen"
          },
          {
            "text": "个人csdn",
            "link": "https://blog.csdn.net/weixin_43525516?type=blog",
            "icon": "iconfont icon-zhuanjiadayibeifen"
          },
          {
            "text": "个人App",
            "icon": "iconfont icon-wodexiao",
            "link": "/blogs/other/appInterview.md",
          }
        ]
      }
    ],
    "sidebar": {
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ],
      "/docs/out-end/": [
        "",
        'spring',
        "api",
        
      ],
      "/docs/react/": [
        "",
      ],
      "/docs/vue/": [
        "",
        "api",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "个人当铺",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1640261289@qq.com",
        "link": "https://www.baidu.com"
      },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ljt",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2023",
  },
  "markdown": {
    "lineNumbers": true
  }
}