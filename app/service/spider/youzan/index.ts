import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * 有赞技术页面数据爬取
 * https://tech.youzan.com/
 */
export default class Index extends BaseService {
  DOMAIN = 'https://tech.youzan.com';
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
    $('.post-list .post').each((index, ele) => {
      const title = $(ele).find('.post-title>a').eq(0)
        .text();
      const href = $(ele).find('.post-title>a').eq(0)
        .attr('href');
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
