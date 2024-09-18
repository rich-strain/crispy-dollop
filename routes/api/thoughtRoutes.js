const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

//api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

//api/thoughts/:id
//router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought).post(addReaction).delete(removeReaction);

module.exports = router;
