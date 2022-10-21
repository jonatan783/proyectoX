const {
  productvaloration,
  uservaloration,
  orderdetail,
} = require("../db/models");

class ValorationServices {
  static async valorationAdd(req, next) {
    const { productId } = req.params;
    const { userId, valoration } = req.body;
    try {
      const newValoration = await productvaloration.create({
        userId,
        valoration,
        productId,
      });
      return "Valoración registrada";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getAll(req, next) {
    const { productId } = req.params;
    try {
      const valorations = await productvaloration.findAll({
        where: {
          productId,
        },
      });
      return valorations;
    } catch (err) {
      throw err;
    }
  }
  static async getAllUserValoration(req, next) {
    const { userId } = req.params;
    try {
      const valorations = await uservaloration.findAll({
        where: {
          userId,
        },
      });
      return valorations;
    } catch (err) {
      throw err;
    }
  }
  static async newUserValoration(req, next) {
    const { userId, valoration, orderId, rolCalificador } = req.body;
    try {
      await uservaloration.create({
        userId,
        valoration,
      });
      const data =
        rolCalificador === "comprador"
          ? { vendedorValorado: true }
          : { compradorValorado: true };
      orderdetail.update(data,{
        where: {
          id: orderId,
        }
      });
      return "Calificación registrada";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = ValorationServices;
