"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable("datausers");
    await queryInterface.createTable("datausers", {
      userId: {
        type: Sequelize.INTEGER,
      },
      razonSocial: {
        type: Sequelize.STRING,
      },
      cuit: {
        type: Sequelize.FLOAT(11),
      },
      mpKey: {
        type: Sequelize.STRING,
      },
      documentImg: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dataUsers");
  },
};
