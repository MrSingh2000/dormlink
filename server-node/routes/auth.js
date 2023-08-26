const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/login", async (req, res) => {
  try {
    let { roll, password } = req.body;
    let user = await User.findOne({ roll });

    if (!user) return { error: "User not found in database" };

    let passCompare = bcrypt.compare(password, user.password);
    if (!passCompare) return { error: "Invalid Credentials" };

    const data = {
      user: {
        id: user.id,
        rollNum: user.rollNum,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ authToken });
  } catch (error) {
    console.log("Server Error in login Route");
  }
});
