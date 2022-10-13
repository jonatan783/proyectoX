const ProductServices = require('../services/ProductServices');

class ProductController {
  static async getAll(req, res, next) { // Busca todos los productos
    const {error , respuesta} = await ProductServices.getAll(req, next);
    return !error ? res.status(200).json(respuesta) : res.status(500).send(respuesta);
  }
}
module.exports = ProductController;