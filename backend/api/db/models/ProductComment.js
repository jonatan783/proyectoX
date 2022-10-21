"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductComment extends Model {
    static associate(models) {
      // define association here
      ProductComment.belongsTo(models.product, {foreignKey: 'productId'});
      ProductComment.belongsTo(models.user, {foreignKey: 'userId'});
    }
  }
  ProductComment.init(
    {
      userName: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "productcomment",
    },
  );
  return ProductComment;
};