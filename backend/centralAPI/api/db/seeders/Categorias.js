'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      name: "Semillas",
      description: "semillas de diferentes especies de canabis",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Fertilizantes",
      description: "Productos químicos para fetilizar la tierra",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Fertilizantes naturales",
      description: "Productos organicos para fetilizar la tierra",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Otros",
      description: "Productos varios",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
