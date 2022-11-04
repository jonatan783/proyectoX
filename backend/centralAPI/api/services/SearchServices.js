const { product, address, category } = require("../db/models");
const { Op } = require("sequelize");

class SearchServices {
  static async searchByTag(req, next) {
    const { arrayTags } = req.body;
    let arrayProduct = [];
    try {
      await Promise.all(
        arrayTags.map(async (tag) => {
          let objDeProductos = {};
          const productos = await product.findAll({
            where: {
              name: {
                [Op.substring]: tag,
              },
            },
          });
          objDeProductos[tag] = productos;
          arrayProduct.push(objDeProductos);
        })
      );
      return arrayProduct.reverse();
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
