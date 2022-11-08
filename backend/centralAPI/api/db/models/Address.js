"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      // define association here
      Address.belongsTo(models.user, {as: 'domicilio', foreignKey: 'userId'})
    }
  }
  Address.init(
    {
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      datos_adicionales: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coordenadas: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
      }
    },
    {
      sequelize,
      modelName: "address",
      timestamps: false
    },
  );
  return Address;
};