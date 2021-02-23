import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * medium数据爬取
 * https://medium.com/front-end-weekly
 */
export default class Index extends BaseService {
  DOMAIN = 'https://medium.com';
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
    // col js-trackPostPresentation
    $('.row .col').each((index, ele) => {
      const title = $(ele).find('h3').text()
        .trim();
      const href = $(ele).find('a').attr('href');
      if (title && href) {
        links.push({
          title,
          href,
          index,
        });
      }
    });
    return links;
  }
}
