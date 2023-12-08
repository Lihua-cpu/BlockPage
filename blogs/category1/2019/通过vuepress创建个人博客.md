---
title: 通过vuepress创建个人博客
date: 2023-12-01
sidebar: true
comment: true # 不显示评论栏
tags:
 - tag4
categories: 
 - 目录二

---

# 入门

## 快速开始

------

快速开始[同 VuePress 官网](https://link.juejin.cn/?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fguide%2Fgetting-started.html)：

**npx**

```
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```

## 手动安装

```bash
npm install vuepress@next vuepress-theme-reco@next --save-dev

# or
yarn add vuepress@next vuepress-theme-reco@next
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // options
  })
})
```

# 参考

### 1、通过iconfont使用图标

```
https://juejin.cn/post/7242181894116573245
```

### 2、官网

```
https://vuepress-theme-reco.recoluan.com/
```

### 3、
