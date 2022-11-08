/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductValoration extends Model {
    static associate (models: any) {
      // define association here
      ProductValoration.belongsTo(models.product, { as: 'valorations', foreignKey: 'productId' })
      ProductValoration.belongsTo(models.user, { foreignKey: 'userId' })
    }
  }
  ProductValoration.init(
    {
      valoration: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'productvaloration'
    }
  )
  return ProductValoration
}
