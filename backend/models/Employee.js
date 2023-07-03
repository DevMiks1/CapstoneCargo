const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
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

  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },

  remarks: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: true,
  },
  accountprivilege: {
    type: String,
    required: false,
  },
  officeCode: {
    type: String,
    required: false,
  },
  reportsto: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
