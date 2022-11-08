'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      name: "semillas",
      description: "semillas de diferentes especies de canabis",
    },{
      name: "fertilizantes",
      description: "Productos químicos para fetilizar la tierra",
    },{
      name: "fertilizantes naturales",
      description: "Productos organicos para fetilizar la tierra",
    },{
      name: "otros",
      description: "Productos varios",
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
