const { product, category } = require("../db/models");
const { Op } = require("sequelize");

class CategoryServices {
  static async newCategory(req, next) {
    const { name, description } = req.body;
    try {
      await category.findOrCreate({
        where: {
          name
        },
        defaults: {
          description
        }
      });
      return "Categoría creada";
    } catch (err) {
      console.log(err)
      throw err;
    }
  }
  static async getAll(req, next) {
    try {
      const categorias = await category.findAll();
      return categorias;
    } catch (err) {
      throw err;
    }
  }
  static async getCatById(req, next) {
    const { id } = req.params
    try {
      const categoria = await category.findOne({
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
      await category.update(req.body, {
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
      await category.destroy({
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