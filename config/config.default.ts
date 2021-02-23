import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

const port = 9001;
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591931412408_4711';

  // add your egg config in here
  config.middleware = [ 'catchError', 'httpLogs'];

  // 请在这里修改自己项目运行的端口
  config.cluster = {
    listen: {
      port,
    },
    nginxCode: 200,
  };

  // add your special config in here
  const bizConfig = {
    root: path.resolve(__dirname, '../'),
  };

  // 关闭csrf防控https://eggjs.org/zh-cn/core/security.html
  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
