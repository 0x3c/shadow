// require("babel-register");
const fetch = require("whatwg-fetch");

console.log(fetch);
const effectMethod = _ => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("over");
    }, 1000);
  });
};
const xx = async mg => {
  const eff = effectMethod();
  const s = await eff;
  console.log("--------");
  console.log(s);
};
xx("dasfa");

// const Koa = require("koa");
// const route = require("koa-route");
// const app = new Koa();
// const fotch = require("./util/fetchFile");

// const url = `http://hr.goldmantis.com/platform/system/sysFile/fileByJobNumber.jtl?jobNumber=N0042937`;

// console.log(fotch(url));

// const main = (ctx, next) => {
//   ctx.response.type = "json";
//   ctx.response.body = "Hello Koa";
//   next();
// };
// const getAvatar = (ctx, next) => {
//   ctx.response.type = "json";
//   ctx.response.body = "Hello Koa";
//   next();
// };
// const help = ctx => {
//   ctx.response.type = "json";
//   ctx.response.body = "Help Koa";
// };

// app.use(route.get("/", main));
// app.use(route.get("/user-avatar", getAvatar));
// app.use(route.get("/help", help));
// app.listen(9966);
