const spawn = require("child_process").spawn;

const ls = spawn("ls");
ls.stdout.on("data", data => console.log(Buffer.from(data).toString()));
