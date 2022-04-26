const db = require("./../database");
const { DataTypes } = require("sequelize");

const Contact = db.define(
  "Contact",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false

      // allowNull defaults to true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
      // allowNull defaults to true
    }
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci"
  }
);

module.exports = Contact;
