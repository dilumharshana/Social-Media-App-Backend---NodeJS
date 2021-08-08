const express = require("express");
const router = express();

router.use(express.json());

//user model
const user = require("../../../models/users/usersModel");

const unfollowUser = async (req, res) => {
  try {
    const { unfollowed, unfollowinig } = req.body;

    const currentUser = await user.findOne({ userName: unfollowed });
    !currentUser && res.status(404).json(`${unfollowed} not found`);

    const unfollowingUser = await user.findOne({ userName: unfollowinig });
    !unfollowingUser && res.status(404).json(`${unfollowinig} not found`);

    if (!currentUser.followings.includes(unfollowinig)) {
      res.status(404).json("you are not following this user");
    }

    //creating new following list
    const removedFollower = currentUser.followings.map((user) => {
      if (user !== unfollowinig) {
        return user;
      }
    });

    //updating followings of current user
    await currentUser.updateOne({ $pull: { followings: unfollowinig } });

    //updating followers of other user
    if (unfollowingUser.followers.includes(unfollowed)) {
      await unfollowingUser.updateOne({ $pull: { followers: unfollowed } });
    }

    res.status(200).json(`${unfollowinig} unfollowed successfully`);
  } catch (err) {}
};

module.exports = unfollowUser;
