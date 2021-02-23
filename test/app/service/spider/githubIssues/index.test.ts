import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/githubIssues/index.test.ts npm test
describe('githubIssues爬虫单测用例', () => {

  it('解析html结构成功', async () => {
    const html = bigoMock.getMockData('githubIssues', 'html_mock.js');
    const result = bigoMock.ctx.service.spider.githubIssues.index.getLinks(html);
    bigoMock.assert(result[0].title === 'nginx反向代理实现线上调试');
    bigoMock.assert(result[0].href === 'https://github.com/bigo-frontend/blog/issues/3');
  });

});
