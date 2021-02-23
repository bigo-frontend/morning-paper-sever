import BaseService from '@/service/baseService';

/**
 * 通过puppeteer获取html结构
 */
export default class Index extends BaseService {
  /**
   * 获取页面html结构
   * @param link 页面链接
   * @param waitTime 超时时间
   */
  public async getHtml(link, waitTime = 3000) {
    const res = await this.service.puppeteer.html.getHtml(link, waitTime);
    return {
      status: true,
      data: res,
    };
  }

}
