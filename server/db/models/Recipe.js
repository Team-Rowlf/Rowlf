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
    defaultValue: 'http://www.clker.com/cliparts/3/5/b/d/1516451297769237837clipart-pots-and-pans.hi.png',
  },
  servings: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cookTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = Recipe;
