const { orderdetail, cartitem, product, orderitem } = require("../db/models");

class OrderDetailServices {
  static async newOrden(req, next) {
    const { userId } = req.body;
    let arrayIdVendedor = [];
    let objIdVendedor = {};
    try {
      const carrito = await cartitem.findAll({
        atributes: ["id", "quantity", "productId"],
        where: {
          userId,
        },
        include: {
          model: product,
        },
      });
      carrito.map(async (cartItem) => {
        if (!arrayIdVendedor.includes(cartItem.product.vendedorId)) {
          arrayIdVendedor.push(cartItem.product.vendedorId);
        }
        if (objIdVendedor[cartItem.product.vendedorId] === undefined) {
          objIdVendedor[cartItem.product.vendedorId] =
            Number(cartItem.product.price) * Number(cartItem.quantity);
        } else {
          objIdVendedor[cartItem.product.vendedorId] =
            objIdVendedor[cartItem.product.vendedorId] +
            Number(cartItem.product.price) * Number(cartItem.quantity);
        }
      });
      await Promise.all(
        arrayIdVendedor.map(async (vendedorId) => {
          const order = await orderdetail.create({
            userId,
            vendedorId,
            status: "pending",
            total: objIdVendedor[vendedorId],
          });
          carrito.map(async (item) => {
            if (order.vendedorId === item.product.vendedorId) {
              orderitem.create({
                quantity: item.quantity,
                productId: item.productId,
                orderDetailId: order.id,
              });
            }
          });
        })
      );
      await cartitem.destroy({
        where: {
          userId,
        },
      });
      return "Procesado con éxito";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async OrderUpdate(req, next) {
    const { id } = req.params;
    try {
      const order = await orderdetail.update(req.body, {
        where: {
          id,
        },
        returning: true,
        plain: true,
      });
      return order;
    } catch (err) {
      throw err;
    }
  }
  static async orderGetAll(req, next) {
    const { userId, rol } = req.params;
    const options =
      rol === "comprador" ? { userId: userId } : { vendedorId: userId };
    console.log(options);
    try {
      const orders = await orderdetail.findAll({
        where: options,
      });
      return orders;
    } catch (err) {
      throw err;
    }
  }
  static async orderGetOne(req, next) {
    const { id } = req.params;
    try {
      const order = await orderdetail.findOne({
        where: {
          id,
        },
      });
      return order;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = OrderDetailServices;
