/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-var-requires */
import OrderDetail from './OrderDetail'
import OrderItem from './OrderItem'

OrderDetail.hasMany(OrderItem, { foreignKey: 'orderDetailId' })
OrderItem.belongsTo(OrderDetail, { foreignKey: 'orderDetailId' })

module.exports = {
  OrderDetail,
  OrderItem
}
