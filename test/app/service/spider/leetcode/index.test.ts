import bigoMock from './../../../../global';

// TESTS=test/app/service/spider/leetcode/index.test.ts npm test
describe('leetcode爬虫单测用例', () => {

  it('获取每日一题链接成功', async () => {
    const result = await bigoMock.ctx.service.spider.leetcode.index.getRandomOneQuestionLink();
    console.log(result);
  });

});
