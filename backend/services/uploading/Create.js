/** @format */

const Uploading = require("../../models/Uploading");

module.exports = async (filename, originalname, mimetype, size, img) => {
  try {
    await Uploading.insertMany({
      filename,
      originalname,
      mimetype,
      size,
      img,
    });
    return true;
  } catch (error) {
    return false;
  }
};
