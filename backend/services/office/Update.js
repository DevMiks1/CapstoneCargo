const Office = require("../../models/Office");

module.exports = async (_id, set) => {
  try {
    const office = await Office.findById(_id);
    if (!office) {
      return { success: false, message: "Office not found" };
    }

    await Office.updateOne({ _id }, { $set: set });

    const updatedOffice = await Office.findById(_id);

    return { success: true, message: "Office updated successfully", newData: updatedOffice };
  } catch (error) {
    return { success: false, message: "Failed to update office" };
  }
};
