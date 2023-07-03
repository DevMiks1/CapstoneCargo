const Uploading = require("../../models/Uploading");

module.exports = async () => {
  try {
    const results = await Uploading.find();
    if (results.length > 0) {
      return results.map((image) => ({
        _id: image._id,
        filename: image.filename,
        originalname: image.originalname,
        mimetype: image.mimetype,
        size: image.size,
        created_at: image.created_at,
      }));
    } else {
      return {
        status: false,
        message: "No images found",
      };
    }
  } catch (error) {
    console.error("Error retrieving images:", error);
    return {
      status: false,
      message: "Failed to retrieve images",
    };
  }
};
