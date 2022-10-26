/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class PaymentDetail extends Model {
    static associate (models: any) {
      // define association here
      PaymentDetail.belongsTo(models.orderdetail)
    }
  }
  PaymentDetail.init(
    {
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      provaider: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'paymentdetail'
    }
  )
  return PaymentDetail
}
