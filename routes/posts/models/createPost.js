const express = require("express");
const router = express.Router();

router.use(express.json());

//post model

const post = require("../../../models/posts/postModel");

const createPost = async (req, res) => {
  const { userName, desc, img, likes, comments } = req.body;

  const newpost = new post({
    userName,
    desc,
    img,
    likes,
    comments,
  });

  const createdPost = await newpost.save();
  !createdPost && res.status(500).json("unnable to create post");

  res.status(200).json(createdPost);
};

module.exports = createPost;
