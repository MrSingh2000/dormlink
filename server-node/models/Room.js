const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const roomSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  rollNum: {
    type: Number,
  },
  roomNum: {
    type: Number,
  },
  hostel: {
    type: String,
  },
});

// name of the collection is 'user'
module.exports = mongoose.model("room", roomSchema);
