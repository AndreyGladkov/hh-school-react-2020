const Router = require("koa-router");
const fs = require("fs");

const data = fs.readFileSync(
  `${__dirname}/dev_data/productsData.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);

module.exports = function () {
  const router = new Router({
    prefix: "/api"
  });
  router.get("/goods", ctx => {
    ctx.body = dataObj;
  });

  return router;
};