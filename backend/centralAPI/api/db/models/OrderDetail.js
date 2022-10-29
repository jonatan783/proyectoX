"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.user, {as: 'comprador', foreignKey: 'userId'});
      OrderDetail.belongsTo(models.user, {as: 'vendedor', foreignKey: 'vendedorId'});
      OrderDetail.hasMany(models.orderitem,{foreignKey: 'orderDetailId'});
    }
  }
  OrderDetail.init(
    {
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
      vendedorValorado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      compradorValorado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "orderdetail",
    },
  );
  return OrderDetail;
};