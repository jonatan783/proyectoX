const { CartItem, Product } = require("../models");
const { Op } = require("sequelize");

class ShoppingCarteServices {
  static async postOrAdd(req, next) {
    const { quantity, productId, ShoppingCartId } = req.body;
    try {
      CartItem.findOrCreate({
        where: { productId, ShoppingCartId },
        defaults: { quantity },
      }).then((itemCart) => {
        return CartItem.update(
          { quantity },
          {
            where: { id: itemCart[0].id },
            returning: true,
            plain: true,
          }
        );
      });
      return "Agregado";
    } catch (err) {
      throw err;
    }
  }
  static async getAll(req, next) {
    const { id } = req.params;
    try {
      const items = await CartItem.findAll({
        where: {
          ShoppingCartId: id,
        },
        include: {
          model: Product,
        },
      });
      return items;
    } catch (err) {
      throw err;
    }
  }
  static async delete(req, next) {
    const { id } = req.params;
    try {
      await CartItem.destroy({
        where: { id },
      });
      return 'Eliminado';
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ShoppingCarteServices;