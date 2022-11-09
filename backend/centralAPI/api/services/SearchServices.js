const { product, address, category } = require("../db/models");
const { Op } = require("sequelize");
const { stringToArray } = require("../utils/functions");

class SearchServices {
  static async searchByTag(req, next) {
    const { stringSearch } = req.body;
    const { limitPage, orderKey, orderSense, page } = req.query;
    const arrayTags = stringToArray(stringSearch);
    console.log(arrayTags);
    try {
      const { count, rows } = await product.findAndCountAll({
        where: {
          name: {
            [Op.like]: { [Op.any]: arrayTags },
          },
        },
        order: [
          [orderKey, orderSense],
        ],
        offset: ((page-1)*limitPage),
        limit: limitPage,
      });
      console.log(count,rows)
      return rows;
    } catch (err) {
      console.log('ver error', err);
      throw err;
    }
  }
  // servicio anterior (buscaba y ordenaba por cantidad de conincidencias del tag)
  // static async searchByTag(req, next) {
  //   const { stringSearch } = req.body;
  //   const { limitPage, orderKey, orderSense } = req.query;
  //   arrayTags = stringToArray(stringSearch);
  //   let arrayProduct = [];
  //   try {
  //     await Promise.all(
  //       arrayTags.map(async (tag) => {
  //         let objDeProductos = {};
  //         const { count, rows } = await product.findAndCountAll({
  //           where: {
  //             name: {
  //               [Op.substring]: tag,
  //             },
  //           },
  //           offset: 10,
  //           limit: 2,
  //         });
  //         objDeProductos[tag] = rows;
  //         arrayProduct.push(objDeProductos);
  //       })
  //     );
  //     return arrayProduct.reverse();
  //   } catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // }
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
