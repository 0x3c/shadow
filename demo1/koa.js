const Koa = require("koa");
const route = require("koa-route");
const app = new Koa();

const main = ctx => {
  ctx.response.type = "json";
  ctx.response.body = "Hello Koa";
};
const help = ctx => {
  ctx.response.type = "json";
  ctx.response.body = "Help Koa";
};
app.use(route.get("/", main));
app.use(route.get("/help", help));
app.listen(9966);
