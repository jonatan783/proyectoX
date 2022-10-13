const { Product } = require("../models");
const { Op } = require("sequelize");

class ProductServices {
  static async getAll(req, next) {
    try {
      const productos = await Product.findAll();
      return { error: false, respuesta: 'productos' };
    } catch (err) {
      return { error: true, respuesta: err };
    }
  }
}
module.exports = ProductServices;
