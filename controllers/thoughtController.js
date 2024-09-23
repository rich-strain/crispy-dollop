const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  // Get All Thoughts
  async getAllThoughts(req, res) {
    try {
      // Find all documents in Thought collection
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get Thought by Id
  async getSingleThought(req, res) {
    try {
      // Find first document in Thought collection by passed thoughtId
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create Thought
  async createThought(req, res) {
    try {
      // Create new document in Thought collection
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { thoughts: thought._id } }, { new: true });
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update Thought Id
  async updateThought(req, res) {
    try {
      // Find document by passed thoughtId and then update document in collecton
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete Thought By Id
  async deleteThought(req, res) {
    try {
      // Find document by passed thoughtId and then remove document from collection
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      // If Thought Not Found, Return Error Message
      if (!thought) {
        return res.status(404).json({ message: 'No Thought Found For The Requested Thought Id' });
      }
      // Remove thoughtId from thoughts array that is referenced in Users collection
      await User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } });
      res.status(200).json({ message: 'Requested Thought Has Been Deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
