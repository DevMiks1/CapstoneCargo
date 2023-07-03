const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: false,
  },
  extension: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritalstatus: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
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
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  valididtype: {
    type: String,
    required: true,
  },
  valididno: {
    type: String,
    required: true,
  },
  valididimg: {
    type: String,
    required: false,
  },
  hasdriverlicense: {
    type: Boolean,
    required: true,
  },
  driverlicenseno: {
    type: String,
    required: false,
  },
  driverlicenseimg: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileimg: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
  reservationidnos: {
    type: Array,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Users", IdeasSchema);
