/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class PaymentDetail extends S.Model {
  static associate (models: any) {
    // define association here
    PaymentDetail.belongsTo(models.orderdetail)
  }
}

PaymentDetail.init(
  {
    amount: {
      type: S.DECIMAL,
      allowNull: false
    },
    provaider: {
      type: S.STRING,
      allowNull: false
    },
    status: {
      type: S.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'paymentdetail'
  }
)

module.exports = PaymentDetail
