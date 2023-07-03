/** @format */

const Office = require("../../models/Office");

module.exports = async (_id) => {
  try {
    const results = await Office.findById(_id)
    return results;
  } catch (error) {
    return [];
  }
};

