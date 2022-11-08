/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import S from 'sequelize'
const db: any = require('../config/index')

class OrderItem extends S.Model {
  static associate (models: any) {
    // define association here
    OrderItem.belongsTo(models.product, { foreignKey: 'productId' })
  }
}

OrderItem.init(
  {
    quantity: {
      type: S.INTEGER,
      allowNull: false
    },
    price: {
      type: S.DECIMAL,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'orderitem'
  }
)

export default OrderItem
