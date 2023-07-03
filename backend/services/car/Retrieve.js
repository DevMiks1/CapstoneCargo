/** @format */

const Car = require("../../models/Car");

module.exports = async (_id) => {
  try {
    const results = await Car.findById(_id)
    return results;
  } catch (error) {
    return [];
  }
};

