const Router = require("koa-router");

module.exports = function() {
  const router = new Router({
    prefix: "/api"
  });

  router
    .get("/products", ctx => {
      ctx.body = 
      [
        {
           "id":"1",
           "name":"Зонт",
           "image":"images/product-1.jpg",
           "price":"1 990",
           "oldPrice":undefined,
           "sale":false,
           "description":"Красный зонт",
           "sizes":[
              "0"
           ]
        },
        {
           "id":"2",
           "name":"Сумка",
           "image":"images/product-2.jpg",
           "price":"290",
           "oldPrice":undefined,
           "sale":false,
           "description":"Красная сумка",
           "sizes":[
              "0"
           ]
        },
        {
           "id":"3",
           "name":"Шлепанцы",
           "image":"images/product-3.jpg",
           "price":"790",
           "oldPrice":undefined,
           "sale":false,
           "description":"Красные шлепанцы",
           "sizes":[
              "37",
              "38",
              "39",
              "40",
              "41"
           ]
        },
        {
           "id":"4",
           "name":"Футболка",
           "image":"images/product-4.jpg",
           "price":"390",
           "oldPrice":"690",
           "sale":true,
           "description":"Красная хлопковая футболка с&#160;коротким рукавом",
           "sizes":[
              "XS",
              "S",
              "M",
              "L",
              "XL",
              "XXL"
           ]
        },
        {
           "id":"5",
           "name":"Толстовка",
           "image":"images/product-5.jpg",
           "price":"3 990",
           "oldPrice":undefined,
           "sale":false,
           "description":"Красная толстовка",
           "sizes":[
              "XS",
              "S",
              "M",
              "L",
              "XL",
              "XXL"
           ]
        },
        {
           "id":"6",
           "name":"Подушка",
           "image":"images/product-6.jpg",
           "price":"990",
           "sale":false,
           "oldPrice":undefined,
           "description":"Красная подушка",
           "sizes":[
              "0"
           ]
        }
     ];
    });

  return router;
};
