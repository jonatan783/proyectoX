"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.hasMany(models.cartitem, {as: 'Productos', foreignKey: 'productId'});
      Product.hasMany(models.orderitem, {foreignKey: 'productId'});
      Product.hasMany(models.productcomment, {as: 'comentarios', foreignKey: 'productId'});
      Product.hasMany(models.productvaloration, {as: 'valorations', foreignKey: 'productId'});
      Product.belongsToMany(models.category, {
        as: "categorias",
        through: "product_category",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: "product",
    },
  );
  return Product;
};