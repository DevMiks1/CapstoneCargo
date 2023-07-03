/** @format */

const Employee = require("../../models/Employee");

module.exports = async () => {
  try {
    const results = await Employee.find()
    return results;
  } catch (error) {
    return [];
  }
};


