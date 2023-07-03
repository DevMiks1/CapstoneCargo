const User = require("../../models/User");

module.exports = async (_id) => {
  try {
    const user = await User.findById(_id);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    await User.deleteOne({ _id });
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete user" };
  }
};
