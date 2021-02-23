import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * 美团技术团队页面数据爬取
 * https://tech.meituan.com/
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
    $('.post-container-wrapper .post-container').each((index, ele) => {
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
