"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
      Category.belongsToMany(models.product, {
        through: "product_category",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("name", value.toLowerCase());
        },
      },
      categoryName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name[0].toUpperCase()}${this.name.substr(
            1,
            this.name.length - 1
          )}`;
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "category",
      timestamps: false
    }
  );
  return Category;
};
