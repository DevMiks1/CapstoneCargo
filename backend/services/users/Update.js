const User = require("../../models/User");

module.exports = async (_id, set) => {
  try {
    const user = await User.findById(_id);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    await User.updateOne({ _id }, { $set: set });

    const updatedUser = await User.findById(_id);

    return { success: true, message: "User updated successfully", newData: updatedUser };
  } catch (error) {
    return { success: false, message: "Failed to update user" };
  }
};
