"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.product,{foreignKey: 'productId'});
      CartItem.belongsTo(models.user,{as: 'Carrito', foreignKey: 'userId'});
    }
  }
  CartItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "cartitem",
    },
  );
  return CartItem;
};