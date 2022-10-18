"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductValoration extends Model {
    static associate(models) {
      // define association here
      ProductValoration.belongsTo(models.product, {as: 'valorations', foreignKey: 'productId'});
    }
  }
  ProductValoration.init(
    {
      valoration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "productvaloration",
    },
  );
  return ProductValoration;
};