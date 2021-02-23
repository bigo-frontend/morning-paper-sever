import BaseService from '@/service/baseService';
import * as puppeteer from 'puppeteer';

/**
 * 通过puppeteer获取html结构
 */
export default class Index extends BaseService {
  viewport = {
    width: 1920,
    height: 1080,
  }
  launch = {
    headless: true,
    args: [ '--remote-debugging-port=0', '--no-sandbox', '--disable-setuid-sandbox' ],
  }
  userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
  /**
   * 获取页面完整html结构
   * @param link 页面链接
   * @param waitTime 页面加载时长
   */
  public async getHtml(link, waitTime = 3000): Promise<string> {
    this.logger.info(link, waitTime);
    const browser = await puppeteer.launch(this.launch);
    const page = await browser.newPage();
    await page.setViewport(this.viewport);
    await page.setUserAgent(this.userAgent);
    await page.goto(link);
    await page.waitFor(waitTime);
    // const userAgent = await page.evaluate('navigator.userAgent');
    // this.logger.info(userAgent);
    const html = await page.evaluate(() => {
      // @ ts-ignore
      // eslint-disable-next-line
      return document?.querySelector('html')?.outerHTML;
    });
    await browser.close();
    return html;
  }
}
