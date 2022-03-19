const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  referedBy: {
      type: DataTypes.STRING,
      allowNull: true
  },
  referralID: {
    type: DataTypes.UUIDV4
  }
});

module.exports = User;
