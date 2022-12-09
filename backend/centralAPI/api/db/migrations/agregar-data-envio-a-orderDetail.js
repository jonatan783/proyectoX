"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('orderdetails', 'idEnvio', {
      type: Sequelize.STRING,
      defaultValue: null
    });
    await queryInterface.addColumn('orderdetails', 'proveedorEnvio', {
      type: Sequelize.STRING,
      defaultValue: null
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('orderdetails', 'idEnvio');
    await queryInterface.removeColumn('orderdetails', 'proveedorEnvio');
  },
};
