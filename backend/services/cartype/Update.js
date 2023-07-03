const CarType = require("../../models/CarType");

module.exports = async (_id, set) => {
  try {
    const cartype = await CarType.findById(_id);
    if (!cartype) {
      return { success: false, message: "CarType not found" };
    }

    await CarType.updateOne({ _id }, { $set: set });

    const updatedCartype = await CarType.findById(_id);

    return { success: true, message: "CarType updated successfully", newData: updatedCartype };
  } catch (error) {
    return { success: false, message: "Failed to update cartype" };
  }
};
