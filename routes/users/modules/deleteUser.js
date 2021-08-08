const express = require("express");
const router = express.Router();

//user model
const user = require("../../../models/users/usersModel");

router.use(express.json());

const deleteUser = async (req, res) => {
  try {
    const { userName } = req.body;

    const findUser = await user.findOne({ userName });
    !findUser && res.status(404).json("no user found");

    //deleteing user

    user.findByIdAndDelete(findUser._id, (err, responce) => {
      if (res) {
        return res.status(200).json("user deleted successfully !");
      }
      res.status(500).json(err);
    });
  } catch (err) {
    res.status(500).json("bad request");
  }
};

module.exports = deleteUser;
