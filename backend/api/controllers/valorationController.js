const ValorationServices = require('../services/ValorationServices');

class ValorationController {
  static async valorationAdd(req, res, next) {
    try {
      const valoration = await ValorationServices.valorationAdd(req, next);
      return res.status(200).json(valoration);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getAll(req, res, next) {
    try {
      const valorations = await ValorationServices.getAll(req, next);
      return res.status(200).json(valorations);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = ValorationController;