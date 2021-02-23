import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * github issues爬取
 * @type 前端 https://github.com/bigo-frontend/blog/issues
 */
export default class Index extends BaseService {
  DOMAIN = 'https://github.com';
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
    $('.js-navigation-container .js-navigation-item').each((index, ele) => {
      const title = $(ele).find('a.js-navigation-open').text();
      const href = $(ele).find('a.js-navigation-open').attr('href');
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
