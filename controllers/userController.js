const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get All Users
  async getAllUsers(req, res) {
    try {
      // Find all documents in User collection
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get User By Id
  async getSingleUser(req, res) {
    try {
      // Find first document in User collection that matches passed userId
      const user = await User.findOne({ _id: req.params.userId });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create User
  async createUser(req, res) {
    try {
      // Create document in User collecton with json passed in req body
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update User By Id
  async updateUser(req, res) {
    try {
      // Find first document in User collection that matches the passed req.params userId
      // then update the document with the passed req.body
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete User By Id
  async deleteUser(req, res) {
    try {
      // Find first document that matches the passed userId, then delete document
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No User Found With The Provided Id' });
      }
      // Delete all thoughtId's from the Thought collection found within the thoughts array that
      // is referenced in the User collection
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.status(200).json({ message: `User: ${user.username} And Related Thoughts Have Been Deleted.` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Add Friend
  async addFriend(req, res) {
    try {
      // Find first user by userId then add friend's userId to the user's friends array in the User collection
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true } //validators are run on update
      );

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'UserId Not Found' });
      }

      // Respond with the updated user document
      res.json(user);
    } catch (err) {
      // Return error
      res.status(500).json(err);
    }
  },
  // Delete Friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } });

      // If userId not found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
      }

      res.json(user);
    } catch (err) {
      // Return error
      res.status(500).json(err);
    }
  },
};
