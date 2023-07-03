const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  officename: {
    type: String,
    required: true,
  },
  fulladdress: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  territory: {
    type: String,
    required: true,
  },
  heademployeeid: {
    type: String,
    required: false,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephonenumber: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Office", IdeasSchema);
