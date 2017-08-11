'use strict';
module.exports = function(sequelize, DataTypes) {
  const Space = sequelize.define('Space', {
    building: DataTypes.STRING,
    street: DataTypes.STRING,
    postcode: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imagePath: DataTypes.TEXT
  });

  Space.associate = function(models) {
    Space.hasMany(models.Avail);
    Space.hasMany(models.Booking);
    Space.belongsTo(models.User);
  }
  return Space;
};
