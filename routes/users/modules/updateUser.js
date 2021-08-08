const express = require("express");
const router = express();
const bcrypt = require("bcrypt");

router.use(express.json());

const test = true;
let total = 100;

//user model
const user = require("../../../models/users/usersModel");

const updateUser = async (req, res) => {
  try {
    const { userName, email, password, coverPicture, profilePicture } =
      req.body;

    let findUser = await user.findOne({ userName: req.params.username });

    //cheking for updating values and seting to the findUser object

    userName ? (findUser.userName = userName) : null;
    email ? (findUser.email = email) : null;

    if (password) {
      //converting new pass to hash code
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);

      findUser.password = newPassword;
    }

    coverPicture ? (findUser.coverPicture = coverPicture) : null;
    profilePicture ? (findUser.profilePicture = profilePicture) : null;

    //updating user
    const updatedUser = await user.findByIdAndUpdate(
      findUser._id,
      {
        $set: findUser,
      },
      (err, res) => (res ? res : err)
    );

    updatedUser && res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json("bad request");
  }
};

module.exports = updateUser;
