const ProductServices = require('../services/ProductServices');

class ProductController {
  static async getAll(req, res, next) {
    try {
      const productos = await
    ProductServices.getAll(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getById(req, res, next) {
    try {
      const producto = await ProductServices.getById(req, next);
      return res.status(200).json(producto);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addProduct(req, res, next) {
    try {
      const respuesta = await ProductServices.addProduct(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addProducts(req, res, next) {
    try {
      const respuesta = await ProductServices.addProducts(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateProduct(req, res, next) {
    try {
      const respuesta = await ProductServices.updateProduct(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const respuesta = await ProductServices.deleteProduct(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getByCategory(req, res, next) {
    try {
      const categoria = await ProductServices.getByCategory(req, next);
      return res.status(200).json(categoria);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getByName(req, res, next) {
    try {
      const productos = await ProductServices.getByName(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = ProductController;