const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Doc = require("../models/Doc");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload = require("../helpers/cloud");
const fetchuser = require("../middlewares/fetchuser");
const Razorpay = require("razorpay");
const uniqid = require("uniqid");
const mongoose = require('mongoose');

const { default: axios } = require("axios");

require("dotenv").config();

const instance = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_SECRET_KEY,
});

router.post("/create/orderId", async (req, res) => {
  // get amount from frontend
  const { amount, customerToken, getOrderId } = req.body;
  try {
    const options = {
      amount: amount,
      currency: "INR",
      receipt: uniqid(),
    };

    instance.orders.create(options, function (err, order) {
      console.log("order id created");
      res.send({ orderId: order.id });
    });
  } catch (error) {
    res.status(500).json({ error: "Error in creating order at backend" });
  }
});

// TODO: ANOTHER ROUTE FOR PAYMENT VERIFICATION IS TO BE MADE
// (ISSUE: ACCOUNT IS IN TEST MODE WHICH DOESN'T ALLOW PAYEMENTS TO BE DONE, HAVE TO COMPLETE KYC FOR ACCOUNT ACTIVATION)

module.exports = router;
