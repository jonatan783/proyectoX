const OrderDetailServices = require('../services/OrderDetailServices');

class OrderDetailController {
  static async newOrden(req, res, next) {
    try {
      const order = await UserServices.newOrden(req, next);
      return res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async OrderUpdate(req, res, next) {
    try {
      const respuesta = await UserServices.OrderUpdate(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async orderGetAll(req, res, next) {
    try {
      const respuesta = await UserServices.orderGetAll(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async orderGetOne(req, res, next) {
    try {
      const respuesta = await UserServices.orderGetOne(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = OrderDetailController;
