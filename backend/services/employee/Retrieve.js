/** @format */

const Employee = require("../../models/Employee");

module.exports = async (_id) => {
  try {
    const results = await Employee.findById(_id);
    return results;
  } catch (error) {
    return [];
  }
};
