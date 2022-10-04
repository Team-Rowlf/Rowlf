const Sequelize = require('sequelize');
const db = require('../db');

const Appliance = db.define('appliance', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Appliance;
