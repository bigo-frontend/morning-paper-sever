import { EggPlugin } from 'egg';
import 'tsconfig-paths/register';

const plugin: EggPlugin = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
