/** @format */

const Office = require("../../models/Office");

module.exports = async () => {
  try {
    const results = await Office.find();
    return results;
  } catch (error) {
    return [];
  }
};
