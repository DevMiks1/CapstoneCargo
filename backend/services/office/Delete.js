const Office = require("../../models/Office");

module.exports = async (_id) => {
  try {
    const office = await Office.findById(_id);
    if (!office) {
      return { success: false, message: "Office not found" };
    }
    await Office.deleteOne({ _id });
    return { success: true, message: "Office deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete office" };
  }
};
