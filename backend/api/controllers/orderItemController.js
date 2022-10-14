const OrderItemServices = require('../services/OrderItemServices');

class OrderItemController {
  static async ItemAdd(req, res, next) {
    try {
      const respuesta = await OrderItemServices.ItemAdd(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async ItemGetAll(req, res, next) {
    try {
      const items = await OrderItemServices.ItemGetAll(req, next);
      return res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = OrderItemController;
