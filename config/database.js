require("dotenv").config();
const { Sequelize } = require('sequelize');

const urlDB = 'mysql://root:umjZrJGfPyQnWaEOIMwhQMazHIsyPGZy@autorack.proxy.rlwy.net:50712/railway'

const sequelize = new Sequelize(urlDB, {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
