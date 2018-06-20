const util = require("util");
const event = require("events");

// 继承 Events 模块
function Player() {
  event.call(this);
}

util.inherits(Player, event);

const p1 = new Player();

p1.on("start", _ => console.log("start.."));
p1.on("running", _ => console.log("running.."));
p1.on("end", _ => console.log("end.."));
p1.emit("start");
