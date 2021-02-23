module.exports = () => {
  return async (ctx, next) => {

    try {
      await next();
    } catch (err) {
      ctx.logger.error(err);
      ctx.body = {
        status: false,
        msg: '出错啦~',
      };
    }

    return ctx.body;
  };
};
