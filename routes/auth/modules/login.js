const express = require("express");
const bcrypt = require("bcrypt");

const router = express();

//for body-parser
router.use(express.json());

const user = require("../../../models/users/usersModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await user.findOne({ email: email });
  !findUser && res.status(400).json("invalid username");

  const checkPassword = await bcrypt.compare(password, findUser.password);
  console.log(checkPassword);
  !checkPassword && res.status(400).json("incorrect password");

  res.status(200).json(`welcome ${findUser.userName}`);
};
module.exports = login;
