const Router = require("koa-router");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync(
  `${__dirname}/data/products.json`, "utf-8"
  ));
  
module.exports = function() {
  const router = new Router({
    prefix: "/api"
  });

  router
    .get("/feelinglucky", ctx => {
      ctx.body = data;
    });

  return router;
};
