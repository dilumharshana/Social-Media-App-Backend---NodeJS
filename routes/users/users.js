const router = require("express").Router();

const getAllUsers = require("./getAllUsers");

router.get("/", (req, res) => getAllUsers(req, res));

module.exports = router;
