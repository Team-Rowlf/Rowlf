const Sequelize = require('sequelize');
const db = require('../db');

const Restrictions = db.define('restrictions', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Restrictions;
