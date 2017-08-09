'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    mobileNo: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  });

  return User;
};
