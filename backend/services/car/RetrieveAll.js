/** @format */

const Car = require("../../models/Car");

module.exports = async () => {
  try {
    const results = await Car.find();
    return results;
  } catch (error) {
    return [];
  }
};
