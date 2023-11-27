const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// POST route to login existing user
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

// POST route to register new user
router.post("/register", async (req, res) => {
  try {
    let { fullName, rollNum, password, email, phoneNum } = req.body;
    // check if user already exists
    let user = await User.findOne({ rollNum });
    if (user) {
      res.status(401).json({ error: "User already Exists" });
      return;
    }

    // encrypting the password
    let salt = await bcrypt.genSalt(10);
    let hashpass = await bcrypt.hash(password, salt);

    user = await User.create({
      fullName,
      rollNum,
      password,
      email,
      phoneNum,
    });
    user.save();
    // generating and sending auth token
    let data = {
      user: {
        id: user.id,
        rollNum: user.rollNum,
      },
    };
    const authToken = jwt.sign(data, jwtToken);

    res.json({ authToken });
  } catch (error) {
    res.json({ error: "Server Error in Register route" });
  }
});
