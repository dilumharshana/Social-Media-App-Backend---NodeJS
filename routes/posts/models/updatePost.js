const express = require("express");
const router = express.Router();

router.use(express.json());

//post model
const post = require("../../../models/posts/postModel");

const updatePost = async (req, res) => {
  try {
    const { desc, img } = req.body;

    const selectedPost = await post.findById(req.params.id);
    !selectedPost && res.status(404).json("post not found");

    await selectedPost.updateOne({ $set: req.body });

    res.status(200).json("updated successfully");
  } catch (err) {}
};

module.exports = updatePost;
