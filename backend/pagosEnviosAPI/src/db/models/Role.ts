/* eslint-disable @typescript-eslint/explicit-function-return-type */
'se strict'
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Role extends Model {
    static associate (models: any) {
      // define association here
      Role.hasOne(models.user, { as: 'rol', foreignKey: 'rolId' })
    }
  }
  Role.init(
    {
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'role'
    }
  )
  return Role
}
