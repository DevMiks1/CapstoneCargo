const Employee = require("../../models/Employee");

module.exports = async (_id, set) => {
  try {
    const employee = await Employee.findById(_id);
    if (!employee) {
      return { success: false, message: "Employee not found" };
    }

    await Employee.updateOne({ _id }, { $set: set });

    const updatedEmployee = await Employee.findById(_id);

    return {
      success: true,
      message: "Employee updated successfully",
      newData: updatedEmployee,
    };
  } catch (error) {
    return { success: false, message: "Failed to update employee" };
  }
};
