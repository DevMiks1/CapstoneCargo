const Payment = require("../../models/Payment");

module.exports = async (_id) => {
  try {
    const payment = await Payment.findById(_id);
    if (!payment) {
      return { success: false, message: "Payment not found" };
    }
    await Payment.deleteOne({ _id });
    return { success: true, message: "Payment deleted successfully" };
  } catch (error) {
    return { success: false, message: "Failed to delete payment" };
  }
};
