const Uploading = require("../../models/Uploading");

module.exports = async (_id) => {
  try {
    const uploading = await Uploading.findById(_id);
    if (!uploading) {
      return { success: false, message: "Uploading not found" };
    }
    
    const filename = uploading.filename; // Retrieve the filename from the uploading object
    
    await Uploading.deleteOne({ _id });
    
    return { success: true, filename, message: "Uploading deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete uploading" };
  }
};
