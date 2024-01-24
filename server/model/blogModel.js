const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: [true, "Add a title field"],
    },
    content: {
      type: String,
      require: [true, "Add a content field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
