const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get All Users
  async getAllUsers(req, res) {
    try {
      res.send('Create User');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get User By Id
  async getSingleUser(req, res) {
    res.send('Get User By Id');
  },
  // Create User
  async createUser(req, res) {
    res.send('Create User');
  },
  // Update User By Id
  async updateUser(req, res) {
    res.send('Update User');
  },
  // Delete User By Id
  async deleteUser(req, res) {
    res.send('Delete User');
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
