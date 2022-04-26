const db = require("./../database");
const { DataTypes } = require("sequelize");

const Stat = db.define("Stat", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ads_click: {
    type: DataTypes.INTEGER
  },
  total_users: {
    type: DataTypes.INTEGER
  },
  ads_wait: {
    type: DataTypes.INTEGER
  },
  total_contacts: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
});

module.exports = Stat;
