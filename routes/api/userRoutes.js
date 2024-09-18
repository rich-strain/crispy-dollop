const router = require('express').Router();

const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

// api/users
router.route('/').get(getAllUsers).post(createUser);

// api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;