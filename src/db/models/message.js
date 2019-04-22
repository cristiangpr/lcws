'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    content: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};