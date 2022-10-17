const { OrderItem, Product } = require("../db/models");

class OrderItemServices {
  static async ItemAdd(req, next) {
    const { price, quantity, productId, orderdetailId } = req.body;
    try {
      const order = OrderItem.create({
        price,
        quantity,
        productId,
        orderdetailId,
      });
      return "Orden creada";
    } catch (err) {
      throw err;
    }
  }
  static async ItemGetAll(req, next) {
    const { id } = req.params;
    try {
      const Items = await OrderItem.findAll({
        where: { orderdetailId: id },
        include: { model: Product },
      });
      return Items;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = OrderItemServices;
