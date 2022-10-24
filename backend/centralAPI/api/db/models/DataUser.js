"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DataUser extends Model {
    static associate(models) {
      // define association here
      DataUser.belongsTo(models.user, {foreignKey: 'userId'});
    }
  }
  DataUser.init(
    {
      razonSocial: {
        type: DataTypes.STRING,
      },
      cuit: {
        type: DataTypes.FLOAT(11),
      },
      mpKey:{
        type: DataTypes.STRING,
      },
      documentImg: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: "datauser",
    },
  );
  return DataUser;
};