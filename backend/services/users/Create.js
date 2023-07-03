const User = require("../../models/User");

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
  hasdriverlicense,
  driverlicenseno,
  driverlicenseimg,
  verified,
  username,
  password,
  profileimg,
  remarks,
  reservationidnos
) => {
  try {
    await User.insertMany({
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
      hasdriverlicense,
      driverlicenseno,
      driverlicenseimg,
      verified,
      username,
      password,
      profileimg,
      remarks,
      reservationidnos,
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
