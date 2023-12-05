const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Admin = require("../models/Admin01");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

require("dotenv").config();

const loginUser = async (req, res, Model, type) => {
  try {
    let { roll, password, email } = req.body;
    let user;
    if (type == "user") user = await Model.findOne({ roll });
    else user = await Model.findOne({ email });

    if (!user) return res.status(401).json({ error: "User not found in database" });

    let passCompare = bcrypt.compare(password, user.password);
    if (!passCompare)
      return res.status(401).json({ error: "Invalid Credentials" });

    const data = {
      user: {
        id: user.id,
        type,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ authToken });
  } catch (error) {
    if (type == "user") console.log("Server Error in user login Route");
    else console.log("Server Error in Admin Login Route");
  }
};

// POST route to login existing user
router.post("/login", async (req, res) => {
  await loginUser(req, res, User, "user");
});

// Route for admin login
router.post("/admin/login", async (req, res) => {
  await loginUser(req, res, Admin, "admin");
});

const registerUser = async (req, res, Model, type) => {
  try {
    let { fullName, rollNum, password, email, phoneNum } = req.body;
    let user;
    if (type == "user") user = await Model.findOne({ rollNum });
    else user = await Model.findOne({ email });

    if (user) return res.status(401).json({ error: "User already Exists" });

    // encrypting the password
    let salt = await bcrypt.genSalt(10);
    let hashpass = await bcrypt.hash(password, salt);

    if (type == "user") {
      user = await Model.create({
        fullName,
        rollNum,
        password: hashpass,
        email,
        phoneNum,
      });
    } else {
      user = await Model.create({
        password: hashpass,
        email,
      });
    }

    user.save();

    let data = {
      user: {
        id: user.id,
        type,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ authToken });
  } catch (error) {
    console.log("error: ", error);
    if (type == "user")
      return res.json({ error: "Server Error in Register user route" });
    else res.json({ error: "Server Error in Register admin route" });
  }
};

// POST route to register new user
router.post("/register", async (req, res) => {
  await registerUser(req, res, User, "user");
});

// Route to get admin access
router.post("/admin/register", async (req, res) => {
  await registerUser(req, res, Admin, "admin");
});

module.exports = router;
