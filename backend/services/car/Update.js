const Car = require("../../models/Car");

module.exports = async (_id, set) => {
  try {
    const car = await Car.findById(_id);
    if (!car) {
      return { success: false, message: "Car not found" };
    }

    await Car.updateOne({ _id }, { $set: set });

    const updatedcar = await Car.findById(_id);

    return { success: true, message: "Car updated successfully", newData: updatedcar };
  } catch (error) {
    return { success: false, message: "Failed to update car" };
  }
};
