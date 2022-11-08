/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class Role extends S.Model {
  static associate (models: any) {
    // define association here
    Role.hasOne(models.user, { as: 'rol', foreignKey: 'rolId' })
  }
}

Role.init(
  {
    role: {
      type: S.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'role'
  }
)

module.exports = Role
