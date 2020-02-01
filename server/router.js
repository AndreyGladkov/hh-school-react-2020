const Router = require("koa-router");

module.exports = function() {
  const router = new Router({
    prefix: "/api"
  });

  router
    .get("/feelinglucky", ctx => {
      ctx.body = "you data";
    });

  return router;
};
