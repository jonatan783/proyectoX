"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    setHash(password, salt) {
      return bcrypt.hash(password, salt);
    }
    static associate(models) {
      // define association here
      User.hasMany(models.address, {as: 'domicilio', foreignKey: 'userId'});
      User.hasMany(models.product, {foreignKey: 'vendedorId'})
      User.belongsTo(models.role ,{as: 'rol', foreignKey: 'rolId'});
      User.hasMany(models.orderdetail), {as: 'comprador', foreignKey: 'userId'};
      User.hasMany(models.orderdetail), {as: 'vendedor', foreignKey: 'vendedorId'};
      User.hasMany(models.cartitem,{as: 'Carrito', foreignKey: 'userId'});
      User.hasMany(models.productcomment, {foreignKey: 'userId'});
      User.hasMany(models.productvaloration, {foreignKey: 'userId'});
      User.hasMany(models.uservaloration, {foreignKey: 'userId'});
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "user",
    },
  );
  User.addHook("beforeCreate", (user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.setHash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });
  return User;
};