const Sequelize = require('sequelize');
const db = require('../db');

const UserSuggestion = db.define('userSuggestion', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.ENUM('approved', 'denied', 'pending'),
    defaultValue: 'pending',
  },
  adminResponse: {
    type: Sequelize.STRING,
    defaultValue: 'N/A',
  },
});

module.exports = UserSuggestion;
