const express = require("express");
const router = express.Router();

const post = require("../../../models/posts/postModel");

router.use(express.json());

const likePost = async (req, res) => {
  try {
    const { likedBy } = req.body;

    const findPost = await post.findById(req.params.id);
    !findPost && res.status(404).json("post not found");

    if (findPost.likes.includes(likedBy)) {
      const unliked = await findPost.updateOne({ $pull: { likes: likedBy } });
      unliked && res.status(200).json("unliked");
    }

    const likecount = await findPost.updateOne({ $push: { likes: likedBy } });

    res.status(200).json("liked");
  } catch (err) {
    console.log(err);
    res.status(400).json("unable to like");
  }
};

module.exports = likePost;
