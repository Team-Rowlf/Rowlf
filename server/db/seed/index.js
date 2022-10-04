const db = require('../db');
const users = require('./users');
const User = require('../models/User');

const seed = async () => {
  // seed some stuff here;
  await db.sync({ force: true });
  await Promise.all(users.map((user) => User.create(user)));
};

// seed();
module.exports = seed;
