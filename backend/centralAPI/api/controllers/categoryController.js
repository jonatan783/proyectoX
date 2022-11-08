const CategoryServices = require("../services/CategoryServices");

class CategoryController {
  static async newCategory(req, res, next) {
    try {
      const respuesta = await CategoryServices.newCategory(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getAll(req, res, next) {
    try {
      const categorias = await CategoryServices.getAll(req, next);
      return res.status(200).json(categorias);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  }
  static async getCatById(req, res, next) {
    try {
      const categoria = await CategoryServices.getCatById(req, next);
      return res.status(200).json(categoria);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const respuesta = await CategoryServices.deleteCategory(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateCatById(req, res, next) {
    try {
      const respuesta = await CategoryServices.updateCatById(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = CategoryController;