const Uploading = require("../../models/Uploading");

module.exports = async (_id, set) => {
  try {
    const updatedUploading = await Uploading.findByIdAndUpdate(_id, { $set: set }, { new: true });

    if (!updatedUploading) {
      return { success: false, message: "Uploading not found" };
    }

    return { success: true, message: "Uploading updated successfully", newData: updatedUploading };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to update uploading" };
  }
};
