const cluster = require("cluster");
const fork = require("child_process").fork;
const cpuNum = require("os").cpus().length;

const server = require("net").createServer();

const workerHubs = {};

const createWork = _ => {
  const worker = fork("child.js");
  workerHubs[worker.pid] = worker;

  worker.on("exit", _ => {
    delete workerHubs[worker.pid];
    createWork();
  });
};

server.on("connection", socket => {
  socket.end("i'm parent");
});

for (let i = 0; i < cpuNum; i++) {
  createWork();
}
console.log(`main pid: ${process.pid}`);
// server.listen(6546, _ => {
//   child1.send("server", server);
//   child2.send("server", server);
//   child3.send("server", server);
//   child4.send("server", server);
//   //   server.close();
// });

// cluster.setupMaster({
//   exec: "child.js"
// });
// for (let i = 0; i < cpuNum; i++) {
//   cluster.fork();
// }
