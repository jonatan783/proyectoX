const { OrderDetail, CartItem } = require("../db/models");

class OrderDetailServices {
  static async newOrden(req, next) {
    const { UserId, total } = req.body;
    try {
      const order = await OrderDetail.create({
        UserId,
        total,
        status: "pending",
      });
      return order;
    } catch (err) {
      throw err;
    }
  }
  static async OrderUpdate(req, next) {
    const { id } = req.params;
    try {
      const order = await OrderDetail.update(req.body, {
        where: {
          id,
        },
        returning: true,
        plain: true,
      });
      return order;
    } catch (err) {
      throw err;
    }
  }
  static async orderGetAll(req, next) {
    const { UserId } = req.params;
    try {
      const orders = await OrderDetail.findAll({
        where: {
          UserId,
        },
      });
      return orders;
    } catch (err) {
      throw err;
    }
  }
  static async orderGetOne(req, next) {
    const { id } = req.params;
    try {
      const order = await OrderDetail.findOne({
        where: {
          id
        }
      });
      return order;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = OrderDetailServices;
