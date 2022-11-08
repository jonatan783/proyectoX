/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class OrderDetail extends S.Model {
  static associate (models: any) {
    OrderDetail.belongsTo(models.user, { as: 'comprador', foreignKey: 'userId' })
    OrderDetail.belongsTo(models.user, { as: 'vendedor', foreignKey: 'vendedorId' })
  }
}

OrderDetail.init(
  {
    total: {
      type: S.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: S.STRING,
      allowNull: false,
      defaultValue: 'Pending'
    },
    vendedorValorado: {
      type: S.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    compradorValorado: {
      type: S.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  },
  {
    sequelize: db,
    modelName: 'orderdetail'
  }
)

export default OrderDetail
