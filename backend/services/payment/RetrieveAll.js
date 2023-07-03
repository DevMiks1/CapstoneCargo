/** @format */

const Payment = require("../../models/Payment");

module.exports = async () => {
  try {
    const results = await Payment.find();
    return results;
  } catch (error) {
    return [];
  }
};
