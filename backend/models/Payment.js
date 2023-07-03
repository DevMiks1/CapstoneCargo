const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  reservationid: {
    type: String,
    required: true,
  },
  referencenumber: {
    type: String,
    required: true,
  },
  bankplatform: {
    type: String,
    required: true,
  },
  paymentdate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Payment", IdeasSchema);
