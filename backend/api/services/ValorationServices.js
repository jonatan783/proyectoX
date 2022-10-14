const { ProductValoration } = require("../models");
const { Op } = require("sequelize");

class ValorationServices {
  static async valorationAdd(req, next) {
    const { productId } = req.params;
    const { userId, valoration } = req.body;
    try {
      const newValoration = await ProductValoration.create({
        userId,
        valoration,
        productId,
      });
      return newValoration;
    } catch (err) {
      throw err;
    }
  }
  static async getAll(req, next) {
    const { productId } = req.params;
    try {
      const valorations = await ProductValoration.findAll({
        where: {
          productId,
        },
      });
      return valorations;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ValorationServices;
