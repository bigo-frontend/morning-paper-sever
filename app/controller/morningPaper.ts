import Controller from '@/controller/baseController';
import { EBizType } from '@/common';

export default class MorningPaper extends Controller {
  /**
   * 早报爬虫
   * infoq ==> http://127.0.0.1:9001/morningPaper?link=https://www.infoq.cn/topic/Front-end&bizType=infoq&waitTime=3000
   * juejin ==> http://127.0.0.1:9001/morningPaper?link=https://juejin.cn/frontend&bizType=juejin&waitTime=3000
   * segmentfault ==> http://127.0.0.1:9001/morningPaper?link=https://segmentfault.com/channel/frontend&bizType=segmentfault&waitTime=3000
   * zhihu ==> http://127.0.0.1:9001/morningPaper?link=https://zhuanlan.zhihu.com/eggjs&bizType=zhihu&waitTime=3000
   * leetcode ==> http://127.0.0.1:9001/morningPaper?link=https://leetcode-cn.com/problems/course-schedule&bizType=leetcode&waitTime=3000
   * testerhome ==> http://127.0.0.1:9001/morningPaper?link=https://testerhome.com/topics/last&bizType=testerhome&waitTime=3000
   * tencenttmq ==> http://127.0.0.1:9001/morningPaper?link=https://cloud.tencent.com/developer/column/1088&bizType=tencenttmq&waitTime=3000
   * githubIssues ==> http://127.0.0.1:9001/morningPaper?link=https://github.com/bigo-frontend/blog/issues&bizType=githubIssues&waitTime=3000
   * freecodecamp ==> http://127.0.0.1:9001/morningPaper?link=https://www.freecodecamp.org/news/&bizType=freecodecamp&waitTime=3000
   * medium ==> http://127.0.0.1:9001/morningPaper?link=https://medium.com/front-end-weekly&bizType=medium&waitTime=3000
   * devto ==> http://127.0.0.1:9001/morningPaper?link=https://dev.to&bizType=devto&waitTime=3000
   * csstricks ==> http://127.0.0.1:9001/morningPaper?link=https://css-tricks.com/&bizType=csstricks&waitTime=3000
   */
  public async index() {
    const waitTime = Number(this.ctx.query.waitTime);
    let link = this.ctx.query.link;
    const bizType = this.ctx.query.bizType;
    let html = '';
    if (!link) {
      this.fail({
        msg: '入参校验不通过',
      });
      return;
    }
    if (bizType === EBizType.LEETCODE) { // leetcode先获取每日一题链接，再爬取具体内容
      link = await this.service.spider.leetcode.index.getRandomOneQuestionLink();
      if (link === '') {
        this.fail({
          msg: '入参校验不通过',
        });
        return;
      }
    }
    console.log(link);
    const htmlResult = await this.service.puppeteer.index.getHtml(link, waitTime);
    if (htmlResult.status === false) {
      this.fail({
        msg: '爬取html失败，请稍后重试或者调整超时时间',
      });
      return;
    }
    html = htmlResult.data;
    const links = this.service.morningPaper.index.formatHtmlByBizType(bizType, html) || [];
    this.success({
      data: links.filter(item => !item.title.match('招聘')),
    });
    return;
  }

  /**
   * 推送消息到企业微信机器人
   * http://127.0.0.1:9001/sendMsg2Weixin?content=hello,world!&token=企业微信token
   */
  async sendMsg2Weixin() {
    const content = this.ctx.query.content;
    const token = this.ctx.query.token;
    if (!token || !content) {
      this.fail({
        resultObj: {
          msg: '入参数据异常',
        },
      });
      return;
    }
    const status = await this.service.sendMsg.weixin.index(token, content);
    this.logger.info('发送消息 bizType=%j  content=%j', token, content);
    if (status) {
      this.success({
        resultObj: {
          msg: '发送成功',
        },
      });
      return;
    }

    this.fail({
      resultObj: {
        msg: '发送失败',
      },
    });
    return;
  }

}
