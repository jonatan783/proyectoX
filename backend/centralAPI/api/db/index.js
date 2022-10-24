const Sequelize = require('sequelize');

const db = new Sequelize('grow', 'sativa', 'sativa', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
