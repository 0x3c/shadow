const fetch = require("node-fetch");
const log = require("./log");

//   .then(res => res.body)
//   .then(body => body.getReader())
//   .then(reader => log(reader));
// 测试fetch
const fotch = async url => {
  const res = await fetch(url);
  const filename = res.headers.get("content-disposition");
  const blob = await res.blob();
  log(`downloaded ${filename}`);
  //   log(blob);
  return { blob, filename };
};
module.exports = fotch;
