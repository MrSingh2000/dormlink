const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const documentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  rollNum: {
    type: Number,
  },
  docs: [
    {
      type: String,
    },
  ],
  info: {
    fullName: { type: String },
    rollNum: { type: Number },
    fatherName: { type: String },
    motherName: { type: String },
    gender: { type: String },
    dob: { type: String },
    bloodGroup: { type: String },
    adhaarNum: { type: String },
    address: { type: String },
    branch: { type: String },
    year: { type: String },
    email: { type: String },
  },
  img: {
    type: String,
  },
  verified: {
    type: Boolean,
  },
});

// name of the collection is 'user'
module.exports = mongoose.model("document", documentSchema);
