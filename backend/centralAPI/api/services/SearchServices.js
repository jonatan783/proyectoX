const { product, address, category } = require("../db/models");
const { Op } = require("sequelize");
const { stringToArray } = require("../utils/functions");

class SearchServices {
  static async searchByTag(req, next) {
    const { stringSearch, rangoPrecio } = req.body;
    const { limitPage, orderKey, orderSense, page, name } = req.query;
    const categoryOption = name ? { name: name } : {};
    const productOption = {
      name: {
        [Op.like]: { [Op.any]: stringToArray(stringSearch) },
      },
    };
    rangoPrecio
      ? (productOption.price = {
          [Op.between]: [rangoPrecio[0], rangoPrecio[1]],
        })
      : null;
    let arrayCategorias = [];
    console.log(productOption)
    try {
      if (stringSearch === "")
        throw new Error(
          "No se encuentran resultados si no se especifica al menos una palabra clave"
        );
      const categoryProductMatch = await category.findAll({
        attributes: ["name"],
        include: {
          model: product,
          attributes: ["id"],
          where: {
            name: {
              [Op.like]: { [Op.any]: stringToArray(stringSearch) },
            },
          },
        },
      });
      categoryProductMatch.map((cat) => {
        arrayCategorias.push(cat.name);
      });
      const { count, rows } = await product.findAndCountAll({
        where: productOption,
        include: {
          model: category,
          where: categoryOption,
        },
        order: [[orderKey, orderSense]],
        offset: (page - 1) * limitPage,
        limit: limitPage,
      });
      return { cantidad: count, data: rows, categorias: arrayCategorias };
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
