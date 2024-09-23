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
    res.send('Add Friend');
  },
  // Delete Friend
  async deleteFriend(req, res) {
    res.send('Get All Thoughts');
  },
};
