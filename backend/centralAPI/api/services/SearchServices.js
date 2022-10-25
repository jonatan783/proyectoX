const { product } = require("../db/models");
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
}
module.exports = SearchServices;
