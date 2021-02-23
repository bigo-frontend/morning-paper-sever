import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * 力扣中国页面数据爬取
 */
export default class Index extends BaseService {
  DOMAIN = 'https://leetcode.com';
  DOMAIN_CN = 'https://leetcode-cn.com';
  link = '';
  /**
   * 获取资讯列表
   */
  public getLinks(html): Link[] {
    const $ = cheerio.load(html);
    const links = this.getHtmlContent($);
    return links;

  }
  /**
   * 解析html结构
   * @param $ cheerio对象
   */
  getHtmlContent($): Link[] {
    const links: Link[] = [];
    const title = 'leetcode每日一题：' + $('h4[data-cypress="QuestionTitle"]').find('a').text();
    links.push({
      title,
      href: this.link,
      index: '0',
    });
    return links;
  }
  /**
   * 根据每日一题接口，获取具体题目链接
   */
  public async getRandomOneQuestionLink() {
    // https://leetcode.com/problems/random-one-question/all
    const apiUrl = `${this.DOMAIN}/problems/random-one-question/all`;
    const result: CURLRes<any> = await this.app.curl(apiUrl, {
      timeout: 5 * 60 * 1000,
      dataType: 'json',
    });
    console.log(result);
    const link = result.headers?.location;
    if (link) {
      this.link = this.DOMAIN_CN + link;
      return this.link;
    }
    return '';
  }
}
