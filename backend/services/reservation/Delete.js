const Reservation = require("../../models/Reservation");

module.exports = async (_id) => {
  try {
    const reservation = await Reservation.findById(_id);
    if (!reservation) {
      return { success: false, message: "Reservation not found" };
    }
    await Reservation.deleteOne({ _id });
    return { success: true, message: "Reservation deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete reservation" };
  }
};
