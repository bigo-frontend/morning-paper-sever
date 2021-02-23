import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * infoq页面数据爬取
 * @type 前端 https://www.infoq.cn/topic/Front-end
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
    $('.article-list .article-item').each((index, ele) => {
      const title = $(ele).find('a.com-article-title').text()
        .replace(/\s/g, '')
        .replace(/\n/g, '');
      const href = $(ele).find('a.com-article-title').attr('href');
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
