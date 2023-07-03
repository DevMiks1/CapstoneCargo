/** @format */

const Uploading = require("../../models/Uploading");

module.exports = async (_id) => {
  try {
    const results = await Uploading.findById(_id);
    return results;
  } catch (error) {
    return [];
  }
};
