"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.user, {as: 'orden', foreignKey: 'userId'});
      OrderDetail.hasMany(models.orderitem,{foreignKey: 'orderDetailId'});
    }
  }
  OrderDetail.init(
    {
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
    },
    {
      sequelize,
      modelName: "orderdetail",
    },
  );
  return OrderDetail;
};