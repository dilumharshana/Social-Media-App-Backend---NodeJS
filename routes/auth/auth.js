const router = require("express").Router();

//user model
const user = require("../../models/users/userModel.js");

router.post("/register", async (req, res) => {
  try {
    const newUser = await new user({
      userName: "dilum harshana",
      email: "dilum.harshana123@gmail.com",
      password: "papapapa",
    });

    await newUser.save();
    res.json("done");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
