"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('orderitems', 'price', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('orderitems', 'price');
  },
};
