const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Add a name field"],
    },
    password: {
      type: String,
      require: [true, "Add a password field"],
    },
    email: {
      type: String,
      require: [true, "Add a email field"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userschema);
