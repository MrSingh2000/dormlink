const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Admin = require("../models/Admin01");
const Doc = require("../models/Doc");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middlewares/fetchuser");
const mongoose = require('mongoose');
require("dotenv").config();

// get all documents available on the database
router.get("/fetch", fetchuser, async (req, res) => {
  try {
    let { id, type } = req.user;
    id = new mongoose.Types.ObjectId(id);

    if (type !== "admin")
      return res.status(404).json({ error: "Unauthenticated Access" });

    let user = await Admin.findById(id);
    if (!user) return res.status(401).json({ error: "Invalid Credentials" });

    let data = await Doc.find();
    res.status(200).json(data );
  } catch (error) {
    console.log(error)
    res.json({ error: "Server Error in fetch admin route" });
  }
});

const userData = async (req, res, update = true) => {
  try {
    let { id, type } = req.user;
    id = new mongoose.Types.ObjectId(id);

    let updateId = req.query.updateId;
    if (type !== "admin")
      return res.status(404).json({ error: "Unauthenticated Access" });

    let user = await Admin.findById(id);
    if (!user) return res.status(401).json({ error: "Invalid Credentials" });

    let userData = await User.findById(updateId);
    if (!userData) return res.status(404).json({ error: "User not found" });

    if (update) {
      await Doc.findOneAndUpdateUpdate({"userId": updateId}, {
        $set: { verified: true },
      });
      res.status(200).json({ message: "Updated successfully" });
    } else res.status(200).json({ data: userData });
  } catch (error) {
    res.json({ error: "Server Error in update/fetch document route" });
  }
};

// update the document verification status of user
router.put("/update", fetchuser, async (req, res) => {
  await userData(req, res, true);
});

router.get("/update", fetchuser, async (req, res) => {
  await userData(req, res, false);
});

module.exports = router;
