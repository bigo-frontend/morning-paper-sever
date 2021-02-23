import BaseService from '@/service/baseService';
import { EBizType } from '@/common';

export default class Index extends BaseService {
  /**
   * 根据业务类型进行html格式清洗
   * @param bizType 业务类型
   * @param html html结构
   */
  formatHtmlByBizType(bizType: string, html: string) {
    switch (bizType) {
      case EBizType.INFOQ:
        return this.service.spider.infoq.index.getLinks(html);
      case EBizType.JUEJIN:
        return this.service.spider.juejin.index.getLinks(html);
      case EBizType.SEGMENTFAULT:
        return this.service.spider.segmentfault.index.getLinks(html);
      case EBizType.ZHIHU:
        return this.service.spider.zhihu.index.getLinks(html);
      case EBizType.LEETCODE:
        return this.service.spider.leetcode.index.getLinks(html);
      case EBizType.TESTERHOME:
        return this.service.spider.testerhome.index.getLinks(html);
      case EBizType.TENCENTTMQ:
        return this.service.spider.tencenttmq.index.getLinks(html);
      case EBizType.MEITUAN:
        return this.service.spider.meituan.index.getLinks(html);
      case EBizType.YOUZAN:
        return this.service.spider.youzan.index.getLinks(html);
      case EBizType.GITHUBISSUES:
        return this.service.spider.githubIssues.index.getLinks(html);
      case EBizType.FREECODECAMP:
        return this.service.spider.freecodecamp.index.getLinks(html);
      case EBizType.MEDIUM:
        return this.service.spider.medium.index.getLinks(html);
      case EBizType.DEVTO:
        return this.service.spider.devto.index.getLinks(html);
      case EBizType.CSSTRICKS:
        return this.service.spider.csstricks.index.getLinks(html);
      default:
        break;
    }
  }
  
}
