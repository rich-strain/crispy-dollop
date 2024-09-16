const { connect, connection } = require('mongoose');
const connectionString = 'mongodb://localhost:27017/twitter_clone_db';

connect(connectionString);

module.exports = connection;
