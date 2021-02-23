import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * devto数据爬取
 * https://dev.to/
 */
export default class Index extends BaseService {
  DOMAIN = 'https://dev.to';
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
    $('.articles-list .crayons-story').each((index, ele) => {
      const title = $(ele).find('.crayons-story__title>a').text()
        .trim();
      const href = $(ele).find('.crayons-story__title>a').attr('href');
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
