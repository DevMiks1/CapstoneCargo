const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  carid: {
    type: String,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
  datetimestart: {
    type: Date,
    required: true,
  },
  datetimefinish: {
    type: Date,
    required: true,
  },
  paymentstatus: {
    type: String,
    required: true,
  },
  totalpayment: {
    type: Number,
    required: true,
  },
  totalpaid: {
    type: Number,
    required: false,
  },
  paymentidnos: {
    type: Array,
    required: false,
  },
  reservationstatus: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
  insurance: {
    type: String,
    required: true,
  },
  hasdriver: {
    type: String,
    required: true,
  },
  driverfirstname: {
    type: String,
    required: false,
  },
  driverlastname: {
    type: String,
    required: false,
  },
  drivermiddlename: {
    type: String,
    required: false,
  },
  driverextension: {
    type: String,
    required: false,
  },
  driverbirthday: {
    type: String,
    required: false,
  },
  driverage: {
    type: String,
    required: false,
  },
  drivernationality: {
    type: String,
    required: false,
  },
  driverphonenumber: {
    type: String,
    required: false,
  },
  driveremail: {
    type: String,
    required: false,
  },
  driverlicenseno: {
    type: String,
    required: false,
  },
  driverlicenseimg: {
    type: String,
    required: false,
  },
  employeeassessorid: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
