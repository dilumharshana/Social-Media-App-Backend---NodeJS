const router = require("express").Router();

//for body-parser
router.use(require("express").json());

const registerUser = require("./modules/registerUser");
const login = require("./modules/login");

//select API

router.post("/register", (req, res) => registerUser(req, res)); // => register new users
router.post("/login", (req, res) => login(req, res)); // => login

module.exports = router;
