const { Schema, model } = require('mongoose');

// import reactionSchema

// import dateFormat Getter

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Getter To Format The Timestamp On Query
    // getter code goes here...
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    type: [reactionSchema],
  },
});

// virtual to get the total count of reactions on retrieval
// virtual code goes here...

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
