'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [{
      role: 'superadmin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      role: 'vendedor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      role: 'comprador',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
