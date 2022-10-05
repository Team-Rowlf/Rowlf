const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/recipes',
  { logging: false }
);

module.exports = db;
