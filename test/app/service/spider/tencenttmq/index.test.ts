import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/tencenttmq/index.test.ts npm test
describe('tencenttmq爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('tencenttmq', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.tencenttmq.index.getLinks(html);
    console.log(result);
    bigoMock.assert(result[0].title === '基于git的测试用例管理方案');
  });

});
