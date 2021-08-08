const express = require("express");
const router = express.Router();

router.use(express.json());

const getPosts = require("./models/getAllPosts.js");
const createPost = require("./models/createPost");
const updatePost = require("./models/updatePost");
const deletePost = require("./models/deletePost");
const likePost = require("./models/likePost.js");

//Select API

router.get("/", (req, res) => getPosts(req, res));
router.post("/", (req, res) => createPost(req, res));
router.put("/:id", (req, res) => updatePost(req, res));
router.delete("/:id", (req, res) => deletePost(req, res));
router.put("/like/:id", (req, res) => likePost(req, res));

module.exports = router;
