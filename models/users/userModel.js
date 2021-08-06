const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 8,
    },
    email: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      defaults: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = user;
