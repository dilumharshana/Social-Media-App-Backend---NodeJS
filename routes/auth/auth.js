const router = require("express").Router();

//user model
const user = require("../../models/users/usersModel.js");

router.post("/register", async (req, res) => {
  try {
    const newUser = await new user({
      userName: "jhon",
      email: "dilum.harshana123@gmail.com",
      password: "papapapa",
    });

    await newUser.save();
    res.json("done");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
