/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model {
    static associate (models: any) {
      // define association here
      Category.belongsToMany(models.product, {
        through: 'product_category'
      })
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set (value: any) {
          this.setDataValue('name', value.toLowerCase())
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'category',
      timestamps: false
    }
  )
  return Category
}
