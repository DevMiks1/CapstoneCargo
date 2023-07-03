/** @format */

const Office = require("../../models/Office");

module.exports = async (
  officename,
  fulladdress,
  province,
  city,
  zipcode,
  territory,
  heademployeeid,
  phonenumber,
  email,
  telephonenumber
) => {
  try {
    await Office.insertMany({
      officename,
      fulladdress,
      province,
      city,
      zipcode,
      territory,
      heademployeeid,
      phonenumber,
      email,
      telephonenumber,
    });
    return true;
  } catch (error) {
    return false;
  }
};
