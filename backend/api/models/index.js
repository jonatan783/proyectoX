const User = require('./User');
const Address = require('./Address');
const Role = require('./Role');
const ShoppingCart = require('./ShoppingCart');
const OrderDetail = require('./OrderDetail');
const CartItem = require('./CartItem');
const OrderItem = require('./OrderItem');
const Product = require('./Product');
const Category = require('./Category');
const ProductComment = require('./ProductComment');
const ProductValoration = require('./ProductValoration');
const PaymentDetail = require('./PaymentDetail');


User.hasMany(Address, {
  foreignKey: 'user_id'
});
Address.belongsTo(User);

Role.hasOne(User, {
  foreignKey: 'role_id'
});
User.belongsTo(Role);

User.hasOne(ShoppingCart,{
  foreignKey: 'user_id'
});
ShoppingCart.belongsTo(User);

User.hasMany(OrderDetail,{
  foreignKey: 'user_id'
});
OrderDetail.belongsTo(User);

ShoppingCart.hasMany(CartItem,{
  foreignKey: 'cart_id'
});
CartItem.belongsTo(ShoppingCart);

OrderDetail.hasMany(OrderItem,{
  foreignKey: 'order_id'
});
OrderItem.belongsTo(OrderDetail);

Product.hasMany(CartItem,{
  foreignKey: 'product_id'
});
CartItem.belongsTo(Product);

Product.hasMany(OrderItem,{
  foreignKey: 'product_id'
});
OrderItem.belongsTo(Product);

Product.belongsToMany(Category, {as: 'categorias', through: 'product_category'})
Category.belongsToMany(Product, {as: 'productos', through: 'product_category'})

Product.hasMany(ProductComment, {
  foreignKey: 'product_id'
})
ProductComment.belongsTo(Product);

Product.hasMany(ProductValoration, {
  foreignKey: 'product_id'
});
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
  Role
};
