const express = require("express");
const router = express.Router();

//post model
const post = require("../../../models/posts/postModel");
router.use(express.json());

const deletePost = async (req, res) => {
  try {
    const findPost = await post.findById(req.params.id);
    !findPost && res.status(404).json("no post found");

    await post.findByIdAndDelete(req.params.id, (err, doc, responce) => {
      if (err) {
        return res.status(400).json("error in deleteing post");
      }
    });

    res.status(200).json("post deletedd successfully !");
  } catch (err) {
    res.status(500).json("unable to delete");
  }
};

module.exports = deletePost;
