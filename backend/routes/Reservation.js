/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateReservation = require("../services/reservation/Create");
const RetrieveAllReservation = require("../services/reservation/RetrieveAll");
const DeleteReservation = require("../services/reservation/Delete");
const UpdateReservation = require("../services/reservation/Update");
const RetrieveReservation = require("../services/reservation/RetrieveAll");

router.use(authMiddleware);
router.post("/create", async (req, res) => {
  const {
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
  } = req.body;

  const results = await CreateReservation(
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
  );
  if (results) {
    res.status(200).send({
      data: req.body,
      message: "Success",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Failed",
    });
  }
});

router.get("/retrieveAll", async (req, res) => {
  const results = await RetrieveAllReservation();
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
});

router.get("/retrieve/:id", async (req, res) => {
  const _id = req.params.id;

  const results = await RetrieveReservation(_id);
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
});

router.put("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const { set } = req.body;

  const results = await UpdateReservation(_id, set);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
      newData: results.newData,
    });
  } else {
    res.status(500).send({
      status: results.success,
      message: results.message,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;

  const results = await DeleteReservation(_id);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
    });
  } else {
    res.status(500).send({
      status: results.sucess,
      message: results.message,
    });
  }
});

module.exports = router;
