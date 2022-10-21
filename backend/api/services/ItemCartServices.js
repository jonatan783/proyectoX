const { cartitem, product, user } = require("../db/models");
const { Op } = require("sequelize");

class ShoppingCarteServices {
  static async postOrAdd(req, next) {
    const { quantity, productId, userId } = req.body;
    try {
      const { stock } = await product.findOne({
        where: {
          id: productId,
        },
      });
      if (stock < quantity) throw new Error("Sin stock sufiente");
      const [row, created] = await cartitem.findOrCreate({
        where: { productId, userId },
        defaults: { quantity },
      });
      if (!created) throw new Error("Producto existente en el carrito");
      return "Agregado";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getAll(req, next) {
    let total = 0;
    const { id } = req.params;
    try {
      const items = await cartitem.findAll({
        where: {
          userId: id,
        },
        attributes: ["id", "quantity"],
        include: {
          model: product,
          where:{
            deletedAt: null,
          },
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      });
      items.map((item) => {
        total = total + item.quantity * item.product.price;
      });
      return { total: total, carrito: items };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async delete(req, next) {
    const { id } = req.params;
    try {
      await cartitem.destroy({
        where: { id },
      });
      return "Eliminado";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = ShoppingCarteServices;
