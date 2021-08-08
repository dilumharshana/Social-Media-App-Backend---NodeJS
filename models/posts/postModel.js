const mongoose = require("mongoose");

const database = require("../../connection/dbConnection");

const post = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    img: {
      type: String,
    },
    desc: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", post);
