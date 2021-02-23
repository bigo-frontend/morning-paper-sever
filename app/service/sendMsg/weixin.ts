import BaseService from '@/service/baseService';

/**
 * 推送微信机器人消息
 */
export default class Index extends BaseService {
  public async index(token, content): Promise<boolean> {
    const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${token}`;
    const data = {
      msgtype: 'markdown',
      markdown: {
        content,
      },
    };
    console.log(url);
    const result: any = await this.app.curl(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    if (result.status !== 200) {
      return false;
    }
    return true;
  }
}
