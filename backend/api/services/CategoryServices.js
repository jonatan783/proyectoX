const { Product, Category } = require("../db/models");
const { Op } = require("sequelize");

class CategoryServices {
  static async newCategory(req, next) {
    const { name, description } = req.body;
    try {
      await Category.findOrCreate({
        where: {
          name
        },
        defaults: {
          description
        }
      });
      return "Categoría creada";
    } catch (err) {
      throw err;
    }
  }
  static async getAll(req, next) {
    try {
      const categorias = await Category.findAll();
      return categorias;
    } catch (err) {
      throw err;
    }
  }
  static async getCatById(req, next) {
    const { id } = req.params
    try {
      const categoria = await Category.findOne({
        where: {
          id: id
        }
      });
      return categoria;
    } catch (err) {
      throw err;
    }
  }
  static async updateCatById(req, next) {
    const { id } = req.params;
    try {
      await Category.update(req.body, {
        where: {
          id
        }
      });
      return "Categoría actualizada";
    } catch (err) {
      throw err;
    }
  }
  static async deleteCategory(req, next) {
    const { id } = req.params
    try {
      await Category.destroy({
        where: {
          id: id
        }
      });
      return "Categoría eliminada";
    } catch (err) {
      throw err;
    }
  }
}
module.exports = CategoryServices;