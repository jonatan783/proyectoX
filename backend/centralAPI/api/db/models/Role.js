"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // define association here
      Role.hasOne(models.user, {as: 'rol', foreignKey: 'rolId'});
    }
  }
  Role.init(
    {
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "role",
      timestamps: false
    },
  );
  return Role;
};