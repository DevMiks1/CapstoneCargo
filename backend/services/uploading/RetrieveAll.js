/** @format */

const Uploading = require("../../models/Uploading");

module.exports = async () => {
  try {
    const results = await Uploading.find();
    return results;
  } catch (error) {
    return [];
  }
};
