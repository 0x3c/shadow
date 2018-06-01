const fetch = require("node-fetch");
const log = require("./log");
const getSuffix = require("./suffix");

const fotch = async (url, params) => {
  const uri = new URL(url);
  const search = new URLSearchParams(params);
  uri.search = search;
  const res = await fetch(uri);

  // get response's buffer
  const blob = await res.blob();
  const symBuffer = Object.getOwnPropertySymbols(blob)[1]; // buffer key
  const buffer = blob[symBuffer];

  //file type in blob type(or response.headers.content-type)
  const suffix = getSuffix(blob.type);

  const filename = `${params.jobNumber}.${suffix}`;
  return { buffer, filename };
};
module.exports = fotch;
