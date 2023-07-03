const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  cartypename: {
    type: String,
    required: true,
  },
  textdescription: {
    type: String,
    required: true,
  },
  htmldescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("CarType", IdeasSchema);
