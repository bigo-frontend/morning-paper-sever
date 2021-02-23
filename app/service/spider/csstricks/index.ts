import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * csstricks数据爬取
 * https://css-tricks.com/
 */
export default class Index extends BaseService {
  DOMAIN = '';
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
    $('.article-grid .article-card').each((index, ele) => {
      const title = $(ele).find('h2>a').text()
        .trim();
      const href = $(ele).find('h2>a').attr('href');
      if (title && href) {
        links.push({
          title,
          href: href,
          index,
        });
      }
    });
    return links;
  }
}
