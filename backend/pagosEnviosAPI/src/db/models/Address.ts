/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Address extends Model {
    static associate (models: any) {
      // define association here
      Address.belongsTo(models.user, { as: 'domicilio', foreignKey: 'userId' })
    }
  }
  Address.init(
    {
      calle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'address'
    }
  )
  return Address
}
