const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  // Get All Thoughts
  async getAllThoughts(req, res) {
    res.send('Get All Thoughts');
  },
  // Get Thought by Id
  async getSingleThought(req, res) {
    res.send('Get Thought by Id');
  },
  // Create Thought
  async createThought(req, res) {
    res.send('Create Thought');
  },
  // Update Thought Id
  async updateThought(req, res) {
    res.send('Update Thought');
  },
  // Delete Thought By Id
  async deleteThought(req, res) {
    res.send('Delete Thought');
  },
};
