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

router.post("/save", [upload.single("file"), fetchuser], async (req, res) => {
  try {
    let user = req.user.id;
    user = new mongoose.Types.ObjectId(user);
    user = await User.findById(user);
    if (!user) {
      res.status(404).json({ error: "Invalid Credentials" });
      return;
    }

    let {
      fullName,
      rollNum,
      fatherName,
      motherName,
      gender,
      dob,
      bloodGroup,
      adhaarNum,
      address,
      branch,
      year,
      email,
      imageUrl,
    } = req.body;

    console.log(req.file);
    if(!req.file.url)
      return res.status(500).json({erro: "Error while connecting to AWS"});

    await Doc.create({
      userId: user._id,
      docs: req.file.url,
      rollNum: user.rollNum,
      verified: false,
      info: {
        fullName,
        rollNum,
        fatherName,
        motherName,
        gender,
        dob,
        bloodGroup,
        adhaarNum,
        address,
        branch,
        year,
        email,
      },
      img: imageUrl,
    });

    res.status(200).json({ message: "Upload successful!" });
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "Server Error in saving documents route" });
  }
});

router.get("/fetch", fetchuser, async (req, res) => {
  try {
    let user = req.user.id;
    user = new mongoose.Types.ObjectId(user);

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

router.post("/image", [upload.single("file"), fetchuser], async (req, res) => {
  try {
    let user = req.user.id;
    user = new mongoose.Types.ObjectId(user);

    user = await User.findById(user);
    if (!user) {
      res.status(404).json({ error: "Invalid Credentials" });
      return;
    }
    console.log(req.file)
    if (!req.file.url)
      return res.status(500).json({ error: "Error while uploading files" });

    res.status(200).json({ url: req.file.url });
  } catch (error) {
    console.log(error)
    res.json({ error: "Server Error in saving documents route" });
  }
});

module.exports = router;
