const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('be-test-case', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
