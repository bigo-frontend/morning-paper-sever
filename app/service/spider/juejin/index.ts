import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * 掘金页面数据爬取
 * @type 前端 https://juejin.im/welcome/frontend
 */
export default class Index extends BaseService {
  DOMAIN = 'https://juejin.cn';
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
    $('.entry-list .entry').each((index, ele) => {
      const title = $(ele).find('a.title').text()
        .trim();
      const href = $(ele).find('a.title').attr('href');
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
