const express = require("express");
const bcrypt = require("bcrypt");

const router = express();

//for body-paser
router.use(express.json());

//user model
const user = require("../../../models/users/usersModel.js");

const registerUser = async (req, res) => {
  try {
    const { name, email, pass } = req.body;

    //hashing thr pass
    const salt = await bcrypt.genSalt(5);
    const hasedPassword = await bcrypt.hash(pass, salt);

    //creating user model
    const newUser = await new user({
      userName: name,
      email: email,
      password: hasedPassword,
    });

    //save user
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = registerUser;
