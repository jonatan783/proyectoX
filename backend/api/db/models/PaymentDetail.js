"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentDetail extends Model {
    static associate(models) {
      // define association here
      PaymentDetail.belongsTo(models.orderdetail);
    }
  }
  PaymentDetail.init(
    {
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      provaider: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "paymentdetail",
    },
  );
  return PaymentDetail;
};