const fs = require("fs");
const fotch = require("./fetchFile");
const log = require("./log");

const open = async path => {
  return new Promise((resolve, reject) => {
    fs.open(path, "w+", (err, fd) => {
      if (err) {
        reject("打开失败");
      }
      resolve(fd);
    });
  });
};

const write = async (path, data) => {
  return new Promise((resolve, reject) => {
    const buffer = Buffer.alloc(data.size);
    buffer.writeInt8(data);
    // const buffer = Buffer.from(data, "utf8");
    log(buffer);
    fs.writeFile(path, buffer, err => {
      if (err) {
        reject("写入失败");
      }
      log(`创建 ${path}`);
      log(data.size / 1024 + "B");
      resolve();
    });
  });
};

const download = async path => {
  const { blob, filename } = await fotch(url);
  //   readBlob(blob);
  await write(filename, blob);
};
download();
