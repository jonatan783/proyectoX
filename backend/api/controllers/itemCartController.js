const ItemCartServices = require('../services/ItemCartServices');

class ItemCartController {
  static async postOrAdd(req, res, next) {
    try {
      const respuesta = await ItemCartServices.postOrAdd(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getAll(req, res, next) {
    try {
      const items = await ItemCartServices.getAll(req, next);
      return res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const items = await ItemCartServices.delete(req, next);
      return res.status(204).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = ItemCartController;