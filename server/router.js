const Router = require("koa-router");
const fs = require("fs");

const products = fs.readFileSync(
  'server/data/products.json',
  "utf-8"
);

module.exports = function () {
  const router = new Router({
    prefix: "/api"
  });
  
  router
    .get("/feelinglucky", ctx => {
      ctx.body = JSON.parse(products);
    });

  return router;
};
