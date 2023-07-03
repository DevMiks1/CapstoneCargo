const Employee = require("../../models/Employee");

module.exports = async (_id) => {
  try {
    const employee = await Employee.findById(_id);
    if (!employee) {
      return { success: false, message: "Employee not found" };
    }
    await Employee.deleteOne({ _id });
    return { success: true, message: "Employee deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete employee" };
  }
};
