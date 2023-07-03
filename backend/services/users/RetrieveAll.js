/** @format */

const User = require("../../models/User");

module.exports = async () => {
  try {
    const results = await User.find()
    return results;
  } catch (error) {
    return [];
  }
};


