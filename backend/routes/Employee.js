/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreateEmployee = require("../services/employee/Create");
const RetrieveAllEmployee = require("../services/employee/RetrieveAll");
const RetrieveEmployee = require("../services/employee/Retrieve");
const DeleteEmployee = require("../services/employee/Delete");
const UpdateEmployee = require("../services/employee/Update");

router.use(authMiddleware);
router.post("/create", async (req, res) => {
  const {
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
  } = req.body;

  const results = await CreateEmployee(
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
  const results = await RetrieveAllEmployee();
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

  const results = await RetrieveEmployee(_id);
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

  const results = await UpdateEmployee(_id, set);
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

  const results = await DeleteEmployee(_id);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
    });
  } else {
    res.status(500).send({
      status: results.success,
      message: results.message,
    });
  }
});

module.exports = router;
