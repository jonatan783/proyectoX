"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // define association here
      ShoppingCart.belongsTo(models.user ,{as: 'carrito', foreignKey: 'userId'});
      ShoppingCart.hasMany(models.cartitem, {as: 'item', foreignKey: 'cartItemId'});
    }
  }
  ShoppingCart.init(
    {
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "shoppingcart",
    },
  );
  return ShoppingCart;
};