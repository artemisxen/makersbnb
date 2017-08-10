'use strict';
module.exports = function(sequelize, DataTypes) {
  const Avail = sequelize.define('Avail', {
    date: DataTypes.DATEONLY,
    isAvailable: DataTypes.BOOLEAN
  });

  Avail.associate = function(models) {
    Avail.belongsTo(models.Space);
  }
  return Avail;
};
