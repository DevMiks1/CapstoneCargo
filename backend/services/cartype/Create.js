/** @format */

const CarType = require("../../models/CarType");

module.exports = async (
  cartypename,
  textdescription,
  htmldescription,
  image
) => {
  try {
    await CarType.insertMany({
      cartypename,
      textdescription,
      htmldescription,
      image,
    });
    return true;
  } catch (error) {
    return false;
  }
};
