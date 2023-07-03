/** @format */

const Reservation = require("../../models/Reservation");

module.exports = async (
  userid,
  carid,
  cartype,
  datetimestart,
  datetimefinish,
  paymentstatus,
  totalpayment,
  totalpaid,
  paymentidnos,
  reservationstatus,
  remarks,
  insurance,
  hasdriver,
  driverfirstname,
  driverlastname,
  drivermiddlename,
  driverextension,
  driverbirthday,
  driverage,
  drivernationality,
  driverphonenumber,
  driveremail,
  driverlicenseno,
  driverlicenseimg,
  employeeassessorid
) => {
  try {
    await Reservation.insertMany({
      userid,
      carid,
      cartype,
      datetimestart,
      datetimefinish,
      paymentstatus,
      totalpayment,
      totalpaid,
      paymentidnos,
      reservationstatus,
      remarks,
      insurance,
      hasdriver,
      driverfirstname,
      driverlastname,
      drivermiddlename,
      driverextension,
      driverbirthday,
      driverage,
      drivernationality,
      driverphonenumber,
      driveremail,
      driverlicenseno,
      driverlicenseimg,
      employeeassessorid,
    });
    return true;
  } catch (error) {
    return false;
  }
};
