"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'description', {
    type: Sequelize.TEXT,
  });
  },

  async down(queryInterface, Sequelize) {
  },
};