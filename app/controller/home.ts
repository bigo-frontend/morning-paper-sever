import Controller from '@/controller/baseController';

export default class HomeController extends Controller {
  public async index() {
    this.ctx.body = 'hello world';
    return;
  }

}
