const Sequelize = require('sequelize');
const db = require('../db');

const Cuisine = db.define('cuisine', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Cuisine;
