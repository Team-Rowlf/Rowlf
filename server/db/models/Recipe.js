const Sequelize = require('sequelize');
const db = require('../db');

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: '',
  },
  servings: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cookTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Recipe;
