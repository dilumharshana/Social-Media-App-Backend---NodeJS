const express = require("express");
const router = express.Router();

//post model
const post = require("../../../models/posts/postModel");

//user model
const user = require("../../../models/users/usersModel");

router.use(express.json());

const getPosts = async (req, res) => {
  try {
    const currentUser = await user.findOne({ userName: req.body.userName });
    const posts = await post.find({ userName: currentUser.userName });

    const friendsposts = await Promise.all(
      currentUser.followings.map((follower) =>
        post.find({ userName: follower })
      )
    );

    const timeline = [...posts, ...friendsposts];
    res.status(200).json(timeline);
  } catch (err) {
    console.log(err);
    res.status(500).json("unable to reach posts");
  }
};

module.exports = getPosts;
