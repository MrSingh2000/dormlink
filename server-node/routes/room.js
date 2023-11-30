const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Room = require("../models/Room");
const Doc = require("../models/Doc");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middlewares/fetchuser");
require("dotenv").config();

// update the room number and others for any user
router.post("/update", fetchuser, async (req, res) => {
  try {
    let { id } = req.user;
    let { roomNum, hostel } = req.body;
    let user = await User.findById(id);
    if (!user) return res.status(401).json({ error: "Invalid Credentials" });

    let roomStatus = await Room.findOne({ userId: id });
    if (roomStatus)
      return res
        .status(404)
        .json({ error: "Room already allocated to the user" });

    roomStatus = await Room.create({
      userId: id,
      rollNum: user.rollNum,
      roomNum,
      hostel,
    });
    roomStatus.save();

    res.json({ message: "Room allocated to the user successfully" });
  } catch (error) {
    res.json({ error: "Server Error in Room Update route" });
  }
});

// fetch the room information of the particular user
router.get("/fetch", fetchuser, async (req, res) => {
  try {
    let { id } = req.user;
    let user = await User.findById(id);
    if (!user) return res.status(401).json({ error: "Invalid Credentials" });

    let roomStatus = await Room.findOne({ userId: id });
    if (!roomStatus)
      return res.status(404).json({ error: "Room not allocated to the user" });

    res.json({ data: roomStatus });
  } catch (error) {
    res.json({ error: "Server Error in particular Room Fetch route" });
  }
});

router.get("/all", fetchuser, async (req, res) => {
  try {
    const hostelName = req.query.hostel;
    let data;
    if (hostelName) data = await Room.find({ hostel: hostelName });
    else data = await Room.find();

    res.json(data);
  } catch (error) {
    res.json({ error: "Server Error in all Room Fetch route" });
  }
});

module.exports = router;
