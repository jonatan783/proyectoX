/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-sequences */
import { Model } from 'sequelize'
'use strict'
const bcrypt = require('bcrypt')

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model {
    setHash (password: any, salt: any) {
      return bcrypt.hash(password, salt)
    }

    static associate (models: any) {
      // define association here
      User.hasMany(models.address, { as: 'domicilio', foreignKey: 'userId' })
      User.hasMany(models.product, { foreignKey: 'vendedorId' })
      User.belongsTo(models.role, { as: 'rol', foreignKey: 'rolId' })
      User.hasOne(models.datauser, { foreignKey: 'userId' })
      User.hasMany(models.orderdetail), { as: 'comprador', foreignKey: 'userId' }
      User.hasMany(models.orderdetail), { as: 'vendedor', foreignKey: 'vendedorId' }
      User.hasMany(models.cartitem, { as: 'Carrito', foreignKey: 'userId' })
      User.hasMany(models.productcomment, { foreignKey: 'userId' })
      User.hasMany(models.productvaloration, { foreignKey: 'userId' })
      User.hasMany(models.uservaloration, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Must be a valid email address'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salt: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      recovery: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'user'
    }
  )
  return User
}
