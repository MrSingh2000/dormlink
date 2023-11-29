const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const documentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  rollNum: {
    type: Number
  },
  docs: [
    {
      type: String,
    },
  ],
  verified: {
    type: Boolean
  }
});

// name of the collection is 'user'
module.exports = mongoose.model("document", documentSchema);
