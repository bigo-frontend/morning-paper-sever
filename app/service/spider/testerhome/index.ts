import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * testerhome页面数据爬取
 * @type test https://testerhome.com/topics/last
 */
export default class Index extends BaseService {
  DOMAIN = 'https://testerhome.com';
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
    $('.item-list .topic').each((index, ele) => {
      const title = $(ele).find('.title>a').attr('title');
      const href = $(ele).find('.title>a').attr('href');
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
