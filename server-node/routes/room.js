const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Admin = require("../models/Admin01");
const Doc = require("../models/Doc");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middlewares/fetchuser");
require("dotenv").config();

router.get("/update", fetchuser, async (req, res) => {
  await userData(req, res, false);
});

module.exports = router;
