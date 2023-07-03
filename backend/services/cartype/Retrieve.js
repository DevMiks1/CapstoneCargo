/** @format */

const CarType = require("../../models/CarType");

module.exports = async (_id) => {
  try {
    const results = await CarType.findById(_id)
    return results;
  } catch (error) {
    return [];
  }
};

