/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class DataUser extends S.Model {
  static associate (models: any) {
    // define association here
    DataUser.belongsTo(models.user, { foreignKey: 'userId' })
  }
}

DataUser.init(
  {
    razonSocial: {
      type: S.STRING
    },
    cuit: {
      type: S.FLOAT(11)
    },
    mpKey: {
      type: S.STRING
    },
    documentImg: {
      type: S.ARRAY(S.STRING)
    }
  },
  {
    sequelize: db,
    modelName: 'datauser'
  }
)

module.exports = DataUser
