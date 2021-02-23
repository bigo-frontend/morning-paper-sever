import bigoMock from './../global';

// TESTS=test/app/controller/morningPaper.test.ts npm test
describe('发送微信机器人消息单测', () => {
  it('入参正常，发送消息成功', async () => {
    bigoMock.app.mockService('sendMsg.weixin', 'index', () => {
      return true;
    });
    const result = await bigoMock.app.httpRequest().get('/sendMsg2Weixin?content=hello,world!&bizType=frontend-test');
    bigoMock.assert(result.body.success === true);
  });

  it('入参content为空，返回error params', async () => {
    const result = await bigoMock.app.httpRequest().get('/sendMsg2Weixin?content=&bizType=frontend-test');
    bigoMock.assert(result.body.success === false);
  });
});
