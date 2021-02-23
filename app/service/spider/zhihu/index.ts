import BaseService from '@/service/baseService';
import * as cheerio from 'cheerio';

/**
 * 知乎页面数据爬取
 * @type 前端 https://zhuanlan.zhihu.com/eggjs
 */
export default class Index extends BaseService {
  DOMAIN = 'https:';
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
    $('.Card .ArticleItem').each((index, ele) => {
      const title = $(ele).find('.ContentItem-title a').text();
      const href = $(ele).find('.ContentItem-title a').attr('href');
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
