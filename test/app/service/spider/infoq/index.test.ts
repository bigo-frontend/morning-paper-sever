import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/infoq/index.test.ts npm test
describe('infoq爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('infoq', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.infoq.index.getLinks(html);
    bigoMock.assert(result[0].title === '谷歌正式发布Android11Beta版，带来多项重磅更新！');
  });

});
