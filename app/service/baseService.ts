import { Service } from 'egg';
import { PlainObject } from 'typings/app';

/**
 * BaseService Service
 */
export default class BaseService extends Service {
  // 通用请求
  public async fetch(url, options?) {
    const result: CURLRes<any> = await this.app.curl(url, {
      timeout: 5 * 60 * 1000,
      dataType: 'json',
      ...options,
    });
    if (result.status !== 200 || result.data.success === false) {
      return {
        status: false,
        data: result.data,
      };
    }
    return {
      status: true,
      data: result.data,
    };
  }

  // https://eggjs.org/zh-cn/core/view.html#locals
  // 日志记录
  public appendLog(msg: PlainObject) {
    this.ctx.app.locals = msg;
  }
}
