const http = require("http");

console.log(process.pid);

const server = http.createServer((req, resp) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
});

process.on("message", (m, server) => {
  if (m === "server") {
    console.log("child start listen");
    server.on("connection", socket => {
      socket.end(`i'm child, pid: ${process.pid}\n`);
      process.kill(process.pid);
    });
  }
});
