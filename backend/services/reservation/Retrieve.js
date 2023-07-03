/** @format */

const Reservation = require("../../models/Reservation");

module.exports = async (_id) => {
  try {
    const results = await Reservation.findById(_id);
    return results;
  } catch (error) {
    return [];
  }
};
