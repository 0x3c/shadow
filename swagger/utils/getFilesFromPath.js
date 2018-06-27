const promisify = require("util").promisify;
const path = require("path");
const fs = require("fs");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const writeFile = promisify(fs.writeFile);

const getFiles = async upath => {
  let fileList = [];
  const pathList = await readdir(upath);
  for (let subPath of pathList) {
    let fullPath = path.join(upath, subPath);
    const statObj = await stat(fullPath);
    if (statObj.isDirectory()) {
      let subFileList = await getFiles(fullPath);
      fileList = fileList.concat(subFileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
};

module.exports = {
  writeFile,
  readdir,
  getFiles
};
