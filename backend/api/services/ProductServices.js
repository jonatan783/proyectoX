const { Product, ProductComment, Category } = require("../models");
const { Op } = require("sequelize");

class ProductServices {
  static async getAll(req, next) {
    try {
      const productos = await Product.findAll();
      return productos;
    } catch (err) {
      throw err;
    }
  }
  static async getById(req, next) {
    try {
      const producto = await Product.findOne({
        where: {
          id: req.params.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: ProductComment,
          },
        ],
      });
      return producto;
    } catch (err) {
      throw err;
    }
  }
  static async addProduct(req, next) {
    //revisar la asociacion con categoria
    const { name, description, category, price, stock, img } = req.body;
    try {
      const producto = await Product.create({
        name,
        description,
        category,
        price,
        stock,
        img,
      });
      return "Creado";
    } catch (err) {
      throw err;
    }
  }
  static async updateProduct(req, next) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return "Actualizado";
    } catch (err) {
      throw err;
    }
  }
  static async deleteProduct(req, next) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      return "Eliminado";
    } catch (err) {
      throw err;
    }
  }
  static async getByCategory(req, next) {
    //revisar la asociacion con producto
    try {
      const categoria = await Category.findByPk(id, {
        include: { model: Product, as: "productos" },
      });
      return categoria;
    } catch (err) {
      throw err;
    }
  }
  static async getByName(req, next) {
    const {name} = req.params;
    try {
      const productos = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      return productos;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ProductServices;
