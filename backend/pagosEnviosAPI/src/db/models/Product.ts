/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model {
    [x: string]: any
    static associate (models: any) {
      // define association here
      Product.belongsTo(models.user, { foreignKey: 'vendedorId' })
      Product.hasMany(models.cartitem, { foreignKey: 'productId' })
      Product.hasMany(models.orderitem, { foreignKey: 'productId' })
      Product.hasMany(models.productcomment, { foreignKey: 'productId' })
      Product.hasMany(models.productvaloration, {
        as: 'valorations',
        foreignKey: 'productId'
      })
      Product.belongsToMany(models.category, {
        through: 'product_category'
      })
    }
  }
  Product.init(
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
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      img: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      dimensiones: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: false
      },
      volumen: {
        type: DataTypes.VIRTUAL,
        get () {
          const vol = this.dimensiones.reduce((p: any, c: any) => p * c)
          return vol
        }
      },
      peso: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      precioPromo: {
        type: DataTypes.DECIMAL
      },
      descuento: {
        type: DataTypes.VIRTUAL,
        get () {
          const descuento = 1 - this.precioPromo / this.price
          return descuento
        }
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'product'
    }
  )
  return Product
}
