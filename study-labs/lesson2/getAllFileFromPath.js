const fs = require("fs");
const path = require("path");

const stat = path =>
  new Promise((resolve, reject) => {
    fs.stat(path, (err, val) => {
      if (err) {
        reject(err);
      }
      resolve(val);
    });
  });

readdir = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, val) => {
      if (err) {
        reject(err);
      }
      resolve(val);
    });
  });

const getAllFiles = async upath => {
  let fileList = [];
  const pathList = await readdir(upath);
  for (let subPath of pathList) {
    let fullPath = path.join(upath, subPath);
    const statObj = await stat(fullPath);
    if (statObj.isDirectory()) {
      let subFileList = await getAllFiles(fullPath);
      fileList = fileList.concat(subFileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
};

const _fs = {
  readdir: getAllFiles
};
module.exports = _fs;
