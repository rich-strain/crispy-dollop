const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // mongoose regex validation for email address
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
  },
  thoughts: [
    {
      _id: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      _id: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// virtual to get the total count of friends on retrieval
// virtual code goes here...

const User = model('User', userSchema);

module.exports = User;
