/** @format */

const Car = require("../../models/Car");

module.exports = async (
  cartypeid,
  cartypename,
  carname,
  platenumber,
  orcrno,
  orcrexpiration,
  lastcheckup,
  maintenanceschedule,
  textdescription,
  seatsavailable,
  enginetype,
  transmissiontype,
  maxrpm,
  recommendedspeed,
  initialrateperday,
  ownername,
  carstatus,
  remarks,
  reservationidnumbers
) => {
  try {
    await Car.insertMany({
      cartypeid,
      cartypename,
      carname,
      platenumber,
      orcrno,
      orcrexpiration,
      lastcheckup,
      maintenanceschedule,
      textdescription,
      seatsavailable,
      enginetype,
      transmissiontype,
      maxrpm,
      recommendedspeed,
      initialrateperday,
      ownername,
      carstatus,
      remarks,
      reservationidnumbers,
    });
    return true;
  } catch (error) {
    return false;
  }
};
