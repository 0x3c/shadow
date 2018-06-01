/*  get suffix from blob.type
    blob.type like 'image/jpeg'
 */
const getSuffix = str => {
  if (str.indexOf("image/jpeg") !== -1) {
    return "jpg";
  }
  return new Error("不能识别图片格式");
};

module.exports = getSuffix;
