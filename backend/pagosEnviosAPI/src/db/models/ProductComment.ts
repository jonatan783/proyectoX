/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductComment extends Model {
    static associate (models: any) {
      // define association here
      ProductComment.belongsTo(models.product, { foreignKey: 'productId' })
      ProductComment.belongsTo(models.user, { foreignKey: 'userId' })
    }
  }
  ProductComment.init(
    {
      userName: {
        type: DataTypes.STRING
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'productcomment'
    }
  )
  return ProductComment
}
