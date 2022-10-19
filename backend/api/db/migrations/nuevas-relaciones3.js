'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orderitems', 'price')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('products', 'vendedorId');
  }
};