import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/segmentfault/index.test.ts npm test
describe('segmentfault爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('segmentfault', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.segmentfault.index.getLinks(html);
    bigoMock.assert(result[0].title === '让你眼前一亮的 10 大 TS 项目');
    bigoMock.assert(result[0].href === 'https://segmentfault.com/a/1190000022913729');
  });

});
