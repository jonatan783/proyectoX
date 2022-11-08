/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderItem extends Model {
    static associate (models: any) {
      // define association here
      OrderItem.belongsTo(models.orderdetail, { foreignKey: 'orderDetailId' })
      OrderItem.belongsTo(models.product, { foreignKey: 'productId' })
    }
  }
  OrderItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'orderitem'
    }
  )
  return OrderItem
}
