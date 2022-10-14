const { ShoppingCart } = require("../models");
const { Op } = require("sequelize");

class ShoppingCarteServices {
  static async cartCreate(req, next) {
    const { id } = req.params;
    try {
      await ShoppingCart.findOrCreate({
        where: {
          UserId: id,
        },
        defaults: {
          total: 0,
        },
      });
      return "Carrito creado";
    } catch (err) {
      throw err;
    }
  }
  static async cartUpdate(req, next) {
    const { id, total } = req.body;
    try {
      await ShoppingCart.update(
        {
          total,
        },
        {
          where: {
            id,
          },
        }
      );
      return "Carrito actualizado";
    } catch (err) {
      throw err;
    }
  }
  static async cartDestroy(req, next) {
    const { id } = req.params;
    try {
      await ShoppingCart.destroy({
        where: {
          id,
        },
      });
      return "Carrito eliminado";
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ShoppingCarteServices;
