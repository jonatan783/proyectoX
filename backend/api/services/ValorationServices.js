const { productvaloration } = require("../db/models");

class ValorationServices {
  static async valorationAdd(req, next) {
    const { productId } = req.params;
    const { userId, valoration } = req.body;
    try {
      const newValoration = await productvaloration.create({
        userId,
        valoration,
        productId,
      });
      return 'Valoración registrada';
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getAll(req, next) {
    const { productId } = req.params;
    try {
      const valorations = await productvaloration.findAll({
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
