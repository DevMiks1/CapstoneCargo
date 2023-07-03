const Car = require("../../models/Car");

module.exports = async (_id) => {
  try {
    const car = await Car.findById(_id);
    if (!car) {
      return { success: false, message: "Car not found" };
    }
    await Car.deleteOne({ _id });
    return { success: true, message: "Car deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete car" };
  }
};
