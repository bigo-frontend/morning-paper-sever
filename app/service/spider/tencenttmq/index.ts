import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * testerhome页面数据爬取
 * @type test https://cloud.tencent.com/developer/column/1088
 */
export default class Index extends BaseService {
  DOMAIN = 'https://cloud.tencent.com';
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
    $('.com-article-list .com-article-panel').each((index, ele) => {
      const title = $(ele).find('.com-article-panel-title>a').text();
      const href = $(ele).find('.com-article-panel-title>a').attr('href');
      if (title && href) {
        links.push({
          title,
          href: this.DOMAIN + href,
          index,
        });
      }
    });
    return links;
  }
}
