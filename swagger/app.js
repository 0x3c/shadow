const http = require("http");
const { getFiles } = require("./utils/getFilesFromPath");

const options = {
  host: "http://dev.api.ops.decobim.com",
  path: "/v1/v2/api-docs",
  method: "GET",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjUzOTgwOTgyNTI1NTQyNCwiY3JlYXRlZCI6MTUyOTkxOTIxNDk2NSwibW9iaWxlIjoiMTU2ODIwNTIwNjkiLCJ0eXBlIjoidXNlciIsImV4cCI6NDEyMTkxOTIxNH0.ZW4Snr3Ck7L7C-hS1F6miPZ4BZU2J_Fn-Y12vzIom9pFGw5bm2x15vaa1n_E7p8t1vEGAwjIpyFJ8c0p2qbbmQ",
    "x-member-id": "100"
  }
};
const start = async _ => {
  const list = await getFiles(__dirname);
  http.request(options, res => {
    console.log(res);
  });
};

start();
