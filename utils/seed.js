const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./seedData');

connection.on('open', async () => {
  console.log('Database Connected');
  try {
    await User.deleteMany({}); //Drop the User collection
    await Thought.deleteMany({}); //Drop the Thought collection
    await User.create(userSeeds); //Add the seed data to the User collection
    await Thought.create(thoughtSeeds); //Add the seed data to the Thought collection

    console.table(userSeeds);
    console.table(thoughtSeeds);
    console.log('Seed data has been added!');
  } catch (err) {
    console.error(err);
  }
  process.exit();
});
