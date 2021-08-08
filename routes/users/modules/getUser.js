const express = require("express");
const router = express.Router();

//user model
const user = require("../../../models/users/usersModel");

router.use(express.json());

const getUser = async (req, res) => {
  try {
    const { userName } = req.body;

    const findUser = await user.findOne({ userName });
    !findUser && res.status(404).json("user not found");

    const { password, updatedAt, createdAt, ...other } = findUser._doc;

    res.status(200).json(other);
  } catch (err) {}
};

module.exports = getUser;
