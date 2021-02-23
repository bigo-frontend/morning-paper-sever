## 前端早报

## 系统介绍
bigo前端早报系统，包括但不限于掘金、知乎、infoq等咨询站点内容推送
支持推送到：企业微信
待支持：钉钉

## 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:9001/
```

## 功能预览
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cad986da6a884001b9a9e5e333061a83~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6f7ffe7c5fd4bff817d009166d3d786~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3ee7778d27a46da9f46f93289ac0901~tplv-k3u1fbpfcp-watermark.image)

## 实现原理

使用puppeteer获取html结构，然后使用cheerio解析dom结构，返回爬虫数据。

