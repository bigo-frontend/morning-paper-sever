import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/juejin/index.test.ts npm test
describe('掘金爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('juejin', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.juejin.index.getLinks(html);
    console.log(result);
    bigoMock.assert(result[0].title === '一个合格的初级前端工程师需要掌握的模块笔记');
  });

});
