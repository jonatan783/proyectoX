const { product, address, category } = require("../db/models");
const { Op } = require("sequelize");
const { stringToArray } = require("../utils/functions");

class SearchServices {
  static async searchByTag(req, next) {
    const { stringSearch } = req.body;
    const { limitPage, orderKey, orderSense, page, name } = req.query;
    const option = name?{name:name}:{}
    let arrayCategorias = []
    try {
      const categoryProductMatch = await category.findAll({
        attributes: ['name'],
        include:{
          model:product,
          attributes: ['id'],
          where: {
            name: {
              [Op.like]: { [Op.any]: stringToArray(stringSearch) },
            },
          }
        }
      })
      categoryProductMatch.map(cat => {
        arrayCategorias.push(cat.name)
      })
      const { count, rows } = await product.findAndCountAll({
        where: {
          name: {
            [Op.like]: { [Op.any]: stringToArray(stringSearch) },
          },
        },
        include: {
          model: category,
          where:option
        },
        order: [
          [orderKey, orderSense],
        ],
        offset: ((page-1)*limitPage),
        limit: limitPage,
      });
      return {cantidad: count, data: rows, categorias: arrayCategorias};
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async searchByCat(req, next) {
    const { id } = req.params;
    try {
      const { products } = await category.findOne({
        where: {
          id,
        },
        include: {
          model: product,
        },
      });
      return products;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async searchByPromo(req, next) {
    try {
      const products = await product.findAll({
        where: {
          precioPromo: { [Op.not]: null },
        },
      });
      return products;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async addAddress(req, next) {
    req.body.userId = req.params.userId;
    try {
      await address.create(req.body);
      return "Guardado con exito";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async myAddresses(req, next) {
    const { userId } = req.params;
    try {
      const direcciones = await address.findAll({
        where: {
          userId,
        },
      });
      return direcciones;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async addressRemove(req, next) {
    const { id } = req.params;
    try {
      await address.destroy({
        where: {
          id,
        },
      });
      return "eliminado";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = SearchServices;
