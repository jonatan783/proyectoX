/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class UserValoration extends Model {
    static associate (models: any) {
      // define association here
      UserValoration.belongsTo(models.user, { foreignKey: 'userId' })
    }
  }
  UserValoration.init(
    {
      valoration: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'uservaloration'
    }
  )
  return UserValoration
}
