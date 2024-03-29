const { product, productcomment, category } = require("../db/models");
const { Op } = require("sequelize");

class ProductServices {
  static async getAll(req, next) {
    try {
      const productos = await product.findAll();
      return productos;
    } catch (err) {
      throw err;
    }
  }
  static async getById(req, next) {
    try {
      const producto = await product.findOne({
        where: {
          id: req.params.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: productcomment,
          },
        ],
      });
      return producto;
    } catch (err) {
      throw err;
    }
  }
  static async addProduct(req, next) {
    const {
      name,
      description,
      categorias,
      price,
      stock,
      img,
      vendedorId,
      dimensiones,
      peso,
    } = req.body;
    try {
      const producto = await product.create({
        name,
        description,
        price,
        stock,
        img,
        vendedorId,
        dimensiones,
        peso,
      });
      categorias.map(async (categoryName) => {
        const categoria = await category.findOne({
          where: {
            name: categoryName,
          },
        });
        producto.addCategory(categoria);
      });
      return "Creado";
    } catch (err) {
      console.log("ver error", err);
      throw err;
    }
  }
  static async addProducts(req, next) {
    const arrayProductos = req.body;
    try {
      await Promise.all(
        arrayProductos.map(async (producto, i) => {
          const {
            name,
            description,
            categorias,
            price,
            stock,
            img,
            vendedorId,
            dimensiones,
            peso,
          } = producto;
          const productoGuardado = await product.create({
            name,
            description,
            price,
            stock,
            img,
            vendedorId,
            dimensiones,
            peso,
          });
          producto.categorias.map(async (categoryName) => {
            const categoria = await category.findOne({
              where: {
                name: categoryName,
              },
            });
            productoGuardado.addCategory(categoria);
          });
          console.log(`Producto ${i+1} agregado con exito`)
        })
      );
      return "Creado";
    } catch (err) {
      console.log("ver error", err);
      throw err;
    }
  }
  static async updateProduct(req, next) {
    try {
      await product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return "Actualizado";
    } catch (err) {
      throw err;
    }
  }
  static async deleteProduct(req, next) {
    try {
      await product.destroy({
        where: {
          id: req.params.id,
        },
      });
      return "Eliminado";
    } catch (err) {
      throw err;
    }
  }
  static async getByCategory(req, next) {
    //revisar la asociacion con producto
    const { id } = req.params;
    try {
      const { products } = await category.findByPk(id, {
        include: [
          {
            model: product,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      return products;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getByName(req, next) {
    const { name } = req.params;
    try {
      const productos = await product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      return productos;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ProductServices;
