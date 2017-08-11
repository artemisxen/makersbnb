'use strict';
module.exports = function(sequelize, DataTypes) {
  const Booking = sequelize.define('Booking', {
    date: DataTypes.DATEONLY,
    confirmed: DataTypes.BOOLEAN
  });

  Booking.associate = function(models) {
    Booking.belongsTo(models.Space);
    Booking.belongsTo(models.User);
  }
  return Booking;
};
