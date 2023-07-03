/** @format */

const Payment = require("../../models/Payment");

module.exports = async (
  userid,
  reservationid,
  referencenumber,
  bankplatform,
  paymentdate,
  amount
) => {
  try {
    await Payment.insertMany({
      userid,
      reservationid,
      referencenumber,
      bankplatform,
      paymentdate,
      amount,
    });
    return true;
  } catch (error) {
    return false;
  }
};
