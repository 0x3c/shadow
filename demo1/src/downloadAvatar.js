const download = require("../util/download");
const log = require("../util/log");
const { getUserAvatar } = require("../config/api");

jobNumberCreator = (from, num) => {
  const jobNumbers = Array.from({ length: num }).map((item, index) => {
    return "N" + (from + index + "").padStart(7, 0);
  });
  return jobNumbers;
};

const downloadRange = async (from, num) => {
  //   const resp = download(getUserAvatar, { jobNumber: "N0042937" });
  //   const resp = download(getUserAvatar, { jobNumber: "N0000000" });
  const numbers = jobNumberCreator(from, num);
  const downloadArr = numbers.map(jobNumber =>
    download(getUserAvatar, { jobNumber })
  );
  const result = await Promise.all(downloadArr);
  const successArr = result.filter(item => item.success);
  const failedArr = result.filter(item => item.failed);
};
downloadRange(42936, 5);
