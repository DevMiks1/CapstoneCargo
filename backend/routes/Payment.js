/** @format */

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const CreatePayment = require("../services/payment/Create");
const RetrieveAllPayment = require("../services/payment/RetrieveAll");
const RetrievePayment = require("../services/payment/Retrieve");
const DeletePayment = require("../services/payment/Delete");
const UpdatePayment = require("../services/payment/Update");

router.use(authMiddleware);
router.post("/create", async (req, res) => {
  const {
    userid,
    reservationid,
    referencenumber,
    bankplatform,
    paymentdate,
    amount,
  } = req.body;

  const results = await CreatePayment(
    userid,
    reservationid,
    referencenumber,
    bankplatform,
    paymentdate,
    amount
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
  const results = await RetrieveAllPayment();
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

  const results = await RetrievePayment(_id);
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

  const results = await UpdatePayment(_id, set);
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

  const results = await DeletePayment(_id);
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
