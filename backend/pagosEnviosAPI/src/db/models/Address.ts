/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class Address extends S.Model {
  static associate (models: any) {
    // define association here
    Address.belongsTo(models.user, { as: 'domicilio', foreignKey: 'userId' })
  }
}

Address.init(
  {
    calle: {
      type: S.STRING,
      allowNull: false
    },
    altura: {
      type: S.STRING,
      allowNull: false
    },
    localidad: {
      type: S.STRING,
      allowNull: false
    },
    provincia: {
      type: S.STRING,
      allowNull: false
    },
    codigo_postal: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'address'
  }
)

module.exports = Address
