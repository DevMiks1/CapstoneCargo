const CarType = require("../../models/CarType");

module.exports = async (_id) => {
  try {
    const cartype = await CarType.findById(_id);
    if (!cartype) {
      return { success: false, message: "CarType not found" };
    }
    await CarType.deleteOne({ _id });
    return { success: true, message: "CarType deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete cartype" };
  }
};
