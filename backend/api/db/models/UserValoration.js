"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserValoration extends Model {
    static associate(models) {
      // define association here
      UserValoration.belongsTo(models.user, {foreignKey: 'userId'});
    }
  }
  UserValoration.init(
    {
      valoration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "uservaloration",
    },
  );
  return UserValoration;
};