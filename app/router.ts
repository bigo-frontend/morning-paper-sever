import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 早报咨询获取
  router.get('/morningPaper', controller.morningPaper.index);
  // 推送微信机器人消息
  router.get('/sendMsg2Weixin', controller.morningPaper.sendMsg2Weixin);
};
