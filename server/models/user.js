const db = require("../db");
const Sequelize = require("sequelize");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bankroll: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
