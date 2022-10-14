const User = require("./User");
const Address = require("./Address");
const Role = require("./Role");
const ShoppingCart = require("./ShoppingCart");
const OrderDetail = require("./OrderDetail");
const CartItem = require("./CartItem");
const OrderItem = require("./OrderItem");
const Product = require("./Product");
const Category = require("./Category");
const ProductComment = require("./ProductComment");
const ProductValoration = require("./ProductValoration");
const PaymentDetail = require("./PaymentDetail");

User.hasMany(Address);
Address.belongsTo(User);

Role.hasOne(User);
User.belongsTo(Role);

User.hasOne(ShoppingCart);
ShoppingCart.belongsTo(User);

User.hasMany(OrderDetail);
OrderDetail.belongsTo(User);

ShoppingCart.hasMany(CartItem);
CartItem.belongsTo(ShoppingCart);

OrderDetail.hasMany(OrderItem);
OrderItem.belongsTo(OrderDetail);

Product.hasMany(CartItem);
CartItem.belongsTo(Product);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

Product.belongsToMany(Category, {
  as: "categorias",
  through: "product_category",
});
Category.belongsToMany(Product, {
  as: "productos",
  through: "product_category",
});

Product.hasMany(ProductComment);
ProductComment.belongsTo(Product);

Product.hasMany(ProductValoration);
ProductValoration.belongsTo(Product);

PaymentDetail.belongsTo(OrderDetail);

module.exports = {
  User,
  Product,
  Address,
  CartItem,
  Category,
  OrderDetail,
  OrderItem,
  PaymentDetail,
  ShoppingCart,
  ProductComment,
  ProductValoration,
  Role,
};
