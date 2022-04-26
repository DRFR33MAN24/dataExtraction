const { Sequelize } = require("sequelize");

module.exports = new Sequelize("callerID", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});
