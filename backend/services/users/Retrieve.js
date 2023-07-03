/** @format */

const User = require("../../models/User");

module.exports = async (_id) => {
  try {
    const results = await User.findById(_id)
    return results;
  } catch (error) {
    return [];
  }
};

