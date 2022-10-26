/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class DataUser extends Model {
    static associate (models: any) {
      // define association here
      DataUser.belongsTo(models.user, { foreignKey: 'userId' })
    }
  }
  DataUser.init(
    {
      razonSocial: {
        type: DataTypes.STRING
      },
      cuit: {
        type: DataTypes.FLOAT(11)
      },
      mpKey: {
        type: DataTypes.STRING
      },
      documentImg: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      }
    },
    {
      sequelize,
      modelName: 'datauser'
    }
  )
  return DataUser
}
