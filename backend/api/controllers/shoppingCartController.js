const ShoppingCartServices = require('../services/ShoppingCartServices');

class ShoppingCartController {
  static async cartCreate(req, res, next) {
    try {
      const respuesta = await ShoppingCartServices.cartCreate(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async cartUpdate(req, res, next) {
    try {
      const respuesta = await ShoppingCartServices.cartUpdate(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async cartDestroy(req, res, next) {
    try {
      const respuesta = await ShoppingCartServices.cartDestroy(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = ShoppingCartController;