/** @format */

const Payment = require("../../models/Payment");

module.exports = async (_id) => {
  try {
    const results = await Payment.findById(_id);
    return results;
  } catch (error) {
    return [];
  }
};
