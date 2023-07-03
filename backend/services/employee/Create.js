/** @format */

const Employee = require("../../models/Employee");

module.exports = async (
  firstname,
  lastname,
  middlename,
  extension,
  age,
  gender,
  maritalstatus,
  nationality,
  email,
  phonenumber,
  birthday,
  province,
  city,
  street,
  zipcode,
  valididtype,
  valididno,
  valididimg,
  username,
  password,
  remarks,
  position,
  accountprivilege,
  officeCode,
  reportsto
) => {
  try {
    await Employee.insertMany({
      firstname,
      lastname,
      middlename,
      extension,
      age,
      gender,
      maritalstatus,
      nationality,
      email,
      phonenumber,
      birthday,
      province,
      city,
      street,
      zipcode,
      valididtype,
      valididno,
      valididimg,
      username,
      password,
      remarks,
      position,
      accountprivilege,
      officeCode,
      reportsto,
    });
    return true;
  } catch (error) {
    return false;
  }
};
