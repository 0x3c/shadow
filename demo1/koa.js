// require("babel-register");
// const fotch = require("./util/fetchFile");
const log = require("./util/log");

const Koa = require("koa");
const route = require("koa-route");
const app = new Koa();
const cors = require("koa2-cors");

app.use(
  cors({
    origin: function(ctx) {
      // if (ctx.url === '/test') {
      return "*";
      // }
      // return 'http://localhost:8080';
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

const main = (ctx, next) => {
  ctx.response.type = "json";
  log("GET");
  ctx.response.body = { name: "xiaowang" };
  next();
};
const getAvatar = (ctx, next) => {
  ctx.response.type = "json";
  ctx.response.body = "Hello Koa";
  next();
};
const help = ctx => {
  ctx.response.type = "json";
  ctx.response.body = "Help Koa";
};

app.use(route.get("/", main));
app.use(route.get("/user-avatar", getAvatar));
app.use(route.get("/help", help));
app.listen(9966);
