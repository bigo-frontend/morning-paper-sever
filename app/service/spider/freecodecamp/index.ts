import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * freecodecamp数据爬取
 * https://www.freecodecamp.org/news/
 */
export default class Index extends BaseService {
  DOMAIN = 'https://www.freecodecamp.org';
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
    $('.post-feed .post-card').each((index, ele) => {
      const title = $(ele).find('.post-card-title>a').text()
        .trim();
      const href = $(ele).find('.post-card-title>a').attr('href');
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
