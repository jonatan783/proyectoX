"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.shoppingcart, {as: 'item', foreignKey: 'cartItemId'});
      CartItem.belongsTo(models.product,{as: 'Productos', foreignKey: 'productId'});
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