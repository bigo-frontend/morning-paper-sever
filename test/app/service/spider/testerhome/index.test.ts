import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/testerhome/index.test.ts npm test
describe('testerhome爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('testerhome', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.testerhome.index.getLinks(html);
    console.log(result);
    bigoMock.assert(result[0].title === '怎么能接听来电？获取不到不到元素');
  });

});
