"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.orderdetail,{foreignKey: 'orderDetailId'});
      OrderItem.belongsTo(models.product, {foreignKey: 'productId'});
    }
  }
  OrderItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "orderitem",
    },
  );
  return OrderItem;
};