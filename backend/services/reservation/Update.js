const Reservation = require("../../models/Reservation");

module.exports = async (_id, set) => {
  try {
    const reservation = await Reservation.findById(_id);
    if (!reservation) {
      return { success: false, message: "Reservation not found" };
    }

    await Reservation.updateOne({ _id }, { $set: set });

    const updatedReservation = await Reservation.findById(_id);

    return { success: true, message: "Reservation updated successfully", newData: updatedReservation };
  } catch (error) {
    return { success: false, message: "Failed to update reservation" };
  }
};
