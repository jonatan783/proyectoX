const OrderDetailServices = require('../services/OrderDetailServices');

class OrderDetailController {
  static async newOrden(req, res, next) {
    try {
      const respuesta = await OrderDetailServices.newOrden(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async OrderUpdate(req, res, next) {
    try {
      const respuesta = await OrderDetailServices.OrderUpdate(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async orderGetAll(req, res, next) {
    try {
      const respuesta = await OrderDetailServices.orderGetAll(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async orderGetOne(req, res, next) {
    try {
      const respuesta = await OrderDetailServices.orderGetOne(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = OrderDetailController;
