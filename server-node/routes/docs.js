const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Doc = require("../models/Doc");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload = require("../helpers/cloud");
const fetchuser = require("../middlewares/fetchuser");
require("dotenv").config();

router.post("/save", [upload.array("files"), fetchuser], async (req, res) => {
  try {
    let user = req.user.id;
    user = await User.findById(user);
    if (!user) {
      res.status(404).json({ error: "Invalid Credentials" });
      return;
    }

    if (!req.files[0].url)
      return res.status(500).json({ error: "Error while uploading files" });

    await Doc.create({
      userId: user._id,
      docs: req.files,
      rollNum: user.rollNum,
      verified: false
    });

    res.status(200).json({ message: "Upload successful!" });
  } catch (error) {
    res.json({ error: "Server Error in saving documents route" });
  }
});

router.get("/fetch", fetchuser, async (req, res) => {
  try {
    let user = req.user.id;
    user = await User.findById(user);
    if (!user) return res.status(404).json({ error: "Invalid Credentials" });

    let data = await Doc.findOne({ userId: user._id });

    res.status(200).json({
      docs: data.docs,
    });
  } catch (error) {
    res.json({ error: "Server Error in fetching documents route" });
  }
});

module.exports = router;
