// Sample user data
const userSeeds = [
  {
    username: 'Homer',
    email: 'h.simpson@gmail.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Bart',
    email: 'b.simpson@gmail.com',
    thoughts: [],
    friends: [],
  },
];

// Sample thought data
const thoughtSeeds = [
  {
    thoughtText: 'Mmmm... donuts!',
    username: 'Homer',
    reactions: [
      {
        reactionBody: 'Ay, carumba!',
        username: 'Bart',
        //reactionId: '66e3049230e554bdde0453f1',
        //createdAt: '2024-09-20T12:33:00',
      },
    ],
  },
  {
    thoughtText: "I'm Bart Simpson, who the hell are you?",
    username: 'Bart',
    reactions: [
      {
        reactionBody: 'Why you little...',
        username: 'Homer',
        //reactionId: '66e3049130e554bdde0450a9',
        //createdAt: '2024-09-20T11:32:00',
      },
    ],
  },
];

// Export the seed data
module.exports = { userSeeds, thoughtSeeds };
