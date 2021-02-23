import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/zhihu/index.test.ts npm test
describe('zhihu爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('zhihu', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.zhihu.index.getLinks(html);
    bigoMock.assert(result[0].title === 'amis在bigo人工智能训练平台落地实践');
    bigoMock.assert(result[0].href === 'https://zhuanlan.zhihu.com/p/348810960');
  });

});
