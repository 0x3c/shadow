const fs = require("fs");
const path = require("path");
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

const write = async (path, buffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, buffer, err => {
      if (err) {
        reject("写入失败");
      }
      resolve();
    });
  });
};

const download = async (url, params) => {
  try {
    const { buffer, filename } = await fotch(url, {
      ...params
    });
    log(`down ${filename} succeed.`);

    const base = path.resolve(__dirname, `../data/${filename}`);
    await write(base, buffer);
    log(`write ${base} succeed.`);
    return { success: params.jobNumber };
  } catch (err) {
    // log(err);
    return { failed: params.jobNumber };
  }
};

module.exports = download;
