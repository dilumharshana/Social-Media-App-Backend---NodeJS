const router = require("express").Router();

const getAllUsers = require("./getAllUsers");

// select API

router.get("/", (req, res) => getAllUsers(req, res)); // => get all the users

module.exports = router;
