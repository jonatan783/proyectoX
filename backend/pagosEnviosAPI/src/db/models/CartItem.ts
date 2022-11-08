/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class CartItem extends Model {
    static associate (models: any) {
      // define association here
      CartItem.belongsTo(models.product, { foreignKey: 'productId' })
      CartItem.belongsTo(models.user, { as: 'Carrito', foreignKey: 'userId' })
    }
  }
  CartItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'cartitem',
      timestamps: false
    }
  )
  return CartItem
}
