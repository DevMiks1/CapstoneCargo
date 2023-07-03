const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  cartypeid: {
    type: String,
    required: true,
  },
  cartypename: {
    type: String,
    required: true,
  },
  carname: {
    type: String,
    required: true,
  },
  platenumber: {
    type: String,
    required: true,
  },
  orcrno: {
    type: String,
    required: true,
  },
  orcrexpiration: {
    type: Date,
    required: true,
  },
  lastcheckup: {
    type: Date,
    required: false,
  },
  maintenanceschedule: {
    type: Date,
    required: false,
  },
  textdescription: {
    type: String,
    required: false,
  },
  seatsavailable: {
    type: Number,
    required: true,
  },
  enginetype: {
    type: String,
    required: true,
  },
  transmissiontype: {
    type: String,
    required: true,
  },
  maxrpm: {
    type: String,
    required: true,
  },
  recommendedspeed: {
    type: String,
    required: true,
  },
  initialrateperday: {
    type: Number,
    required: true,
  },

  ownername: {
    type: String,
    required: true,
  },

  carstatus: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
  reservationidnumbers: {
    type: Array,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Car", IdeasSchema);
