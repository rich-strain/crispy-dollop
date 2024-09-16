const { Schema, Types } = require('mongoose');

// import dateFormat Getter
// getter path goes here...

const reationSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Getter to format the timestamp on query
    // getter code goes here...
  },
});

// Reaction is not a model, but rather a subdocument of the Thought model so we don't need to call model() on it.
module.exports = reationSchema;
