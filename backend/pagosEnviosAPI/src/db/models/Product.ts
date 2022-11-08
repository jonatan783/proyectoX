/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class Product extends S.Model {
  [x: string]: any
  static associate (models: any) {
    // define association here
    Product.belongsTo(models.user, { foreignKey: 'vendedorId' })
    Product.hasMany(models.orderitem, { foreignKey: 'productId' })
    Product.hasMany(models.productcomment, { foreignKey: 'productId' })
  }
}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      set (value: any) {
        this.setDataValue('name', value.toLowerCase())
      }
    },
    description: {
      type: S.STRING,
      allowNull: false
    },
    price: {
      type: S.DECIMAL,
      allowNull: false
    },
    stock: {
      type: S.INTEGER,
      allowNull: false
    },
    img: {
      type: S.ARRAY(S.STRING)
    },
    dimensiones: {
      type: S.ARRAY(S.DECIMAL),
      allowNull: false
    },
    volumen: {
      type: S.VIRTUAL,
      get () {
        const vol = this.dimensiones.reduce((p: any, c: any) => p * c)
        return vol
      }
    },
    peso: {
      type: S.DECIMAL,
      allowNull: false
    },
    precioPromo: {
      type: S.DECIMAL
    },
    descuento: {
      type: S.VIRTUAL,
      get () {
        const descuento = 1 - this.precioPromo / this.price
        return descuento
      }
    }
  },
  {
    sequelize: db,
    modelName: 'product'
  }
)

module.exports = Product
