const Sequelize = require('sequelize');
const db = require('../db');

const LineItem = db.define('lineItem', {
  qty: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  measurement: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = LineItem;
