const express = require("express");
const router = express.Router();

router.use(express.json());

//uer model
const user = require("../../../models/users/usersModel");

const followers = async (req, res) => {
  try {
    const { followedBy, follow } = req.body;

    let currentuser = await user.findOne({ userName: followedBy }); // followed by user
    !currentuser && res.status(400).json(`${followedBy} not found`);

    const followingUser = await user.findOne({ userName: follow }); // user
    !followingUser && res.status(400).json(`${follow} not found`);

    //cheking if user already following new follower
    if (currentuser.followings.includes(follow))
      return res.status(400).json(`you already following ${follow}`);

    await currentuser.updateOne({ $push: { followings: follow } });

    await followingUser.updateOne({ $push: { followers: followedBy } });

    res.status(200).json("user follwed succcessfully");
  } catch (err) {
    res.status(400).json("unnable to follow");
  }
};

module.exports = followers;
