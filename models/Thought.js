const { Schema, model } = require('mongoose');

// import reactionSchema
const reactionSchema = require('./Reaction');
// import dateFormat Getter
const { formatDate } = require('../utils/helpers');

const thoughtSchema = new Schema(
  {
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
      get: (date) => {
        return formatDate(date);
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: [reactionSchema],
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// virtual to get the total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
