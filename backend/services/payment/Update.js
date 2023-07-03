const Payment = require("../../models/Payment");

module.exports = async (_id, set) => {
  try {
    const payment = await Payment.findById(_id);
    if (!payment) {
      return { success: false, message: "Payment not found" };
    }

    await Payment.updateOne({ _id }, { $set: set });

    const updatedPayment = await Payment.findById(_id);

    return { success: true, message: "Payment updated successfully", newData: updatedPayment };
  } catch (error) {
    return { success: false, message: "Failed to update payment" };
  }
};
