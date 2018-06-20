const readdir = require("./lesson2/getAllFileFromPath").readdir;

const app = async _ => {
  const resulte = await readdir(__dirname);
  console.log(resulte);
};
app().then();
