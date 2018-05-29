const Koa = require("koa");
const route = require("koa-route");
const app = new Koa();

const main = (ctx, next) => {
  console.log(1);
  ctx.response.type = "json";
  ctx.response.body = "Hello Koa";
  next();
};
const main2 = (ctx, next) => {
  console.log(2);
  ctx.response.type = "json";
  ctx.response.body = "Hello Koa";
  next();
};
const help = ctx => {
  ctx.response.type = "json";
  ctx.response.body = "Help Koa";
};
app.use(route.get("/", main));
app.use(route.get("/", main2));
app.use(route.get("/help", help));
app.listen(9966);
