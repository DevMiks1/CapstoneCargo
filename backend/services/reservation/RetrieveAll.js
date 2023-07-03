/** @format */

const Reservation = require("../../models/Reservation");

module.exports = async () => {
  try {
    const results = await Reservation.find();
    return results;
  } catch (error) {
    return [];
  }
};
