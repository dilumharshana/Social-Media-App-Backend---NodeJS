const router = require("express").Router();

router.use(require("express").json());

const getUser = require("./modules/getUser");
const getAllUsers = require("./modules/getAllUsers");
const updateUser = require("./modules/updateUser");
const deleteUser = require("./modules/deleteUser");
const followUser = require("./modules/followers");
const unFollowUser = require("./modules/unfollowUser");

// select API

router.get("/:username", (req, res) => getUser(req, res));
router.get("/", (req, res) => getAllUsers(req, res));
router.put("/:username", (req, res) => updateUser(req, res));
router.delete("/:username", (req, res) => deleteUser(req, res));
router.put("/follow/:username", (req, res) => followUser(req, res));
router.put("/unfollow/:username", (req, res) => unFollowUser(req, res));

module.exports = router;
