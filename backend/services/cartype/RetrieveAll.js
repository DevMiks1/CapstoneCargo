/** @format */

const CarType = require("../../models/CarType");

module.exports = async () => {
  try {
    const results = await CarType.find();
    return results;
  } catch (error) {
    return [];
  }
};
