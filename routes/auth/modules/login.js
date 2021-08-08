const express = require("express");
const bcrypt = require("bcrypt");

const router = express();

//for body-parser
router.use(express.json());

const user = require("../../../models/users/usersModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //cheking availability
    !email && res.status(404).json("enter user name");
    !password && res.status(404).json("enter password");

    //cheking email
    const findUser = await user.findOne({ email: email });
    !findUser && res.status(400).json("invalid username");

    //cheking password
    const checkPassword = await bcrypt.compare(password, findUser.password);
    !checkPassword && res.status(400).json("incorrect password");

    res.status(200).json(`welcome ${findUser.userName}`);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = login;
