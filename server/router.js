const Router = require("koa-router");
const fs = require("fs");

const data = fs.readFileSync(
  `${__dirname}/popularProducts.json`,
  "utf-8"
);

module.exports = function() {
  const router = new Router({
    prefix: "/api"
  });

  router
    .get("/feelinglucky", ctx => {
      ctx.body = JSON.parse(data);
    });

  return router;
};
