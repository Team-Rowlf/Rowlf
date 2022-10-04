const Sequelize = require('sequelize');
const db = require('../db');

const ShoppingList = db.define('shoppingList', {
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = ShoppingList;
