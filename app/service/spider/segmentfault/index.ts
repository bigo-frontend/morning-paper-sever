import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * segmentfault页面数据爬取
 * @type 前端 https://segmentfault.com/channel/frontend
 */
export default class Index extends BaseService {
  DOMAIN = 'https://segmentfault.com';
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
    $('.news-list .news__item-info').each((index, ele) => {
      const title = $(ele).find('.news__item-title').text();
      const url = $(ele).find('a').eq(0)
        .attr('href');
      if (title && url) {
        links.push({
          title,
          href: this.DOMAIN + url,
          index,
        });
      }
    });
    return links;
  }
}
