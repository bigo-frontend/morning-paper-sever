module.exports = () => {
  return async (ctx, next) => {

    await next();

    ctx.app.logger.info('httplogs=%j', {
      body: ctx.body,
      url: ctx.request.url,
      method: ctx.request.method,
      referer: ctx.request.headers.referer,
      resStatus: ctx.response.status,
    });

    return ctx.body;
  };
};
