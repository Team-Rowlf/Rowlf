const Sequelize = require('sequelize');
const db = require('../db');

const Restriction = db.define('restriction', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Restriction;
