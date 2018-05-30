// import "whatwg-fetch";
const fetch = require("whatwg-fetch");
const log = require("./log");

// 测试fetch

const fotch = async url => {
  const res = await fetch(url);
  const total = res.headers.get("content-length");
  log(`total: ${total}`);
  console.log(res);
  let reader = res.body.getReader();
  let chunk = 0;
  while (true) {
    const result = await reader.read();
    if (result.done) break;
    log(result);
    chunk += result.value.length;
    log(`received: ${chunk}(${Math.round(chunk / total * 100)} %)`);
  }
};
module.exports = fotch;
