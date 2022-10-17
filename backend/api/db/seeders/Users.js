"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        name: "Super",
        lastname: "Admin",
        email: "superadmin@adminsativa.com",
        password:
          "$2b$16$jun2/N4pMyTw6uD020Cri.TFVuzwAWTdnDElOC3D/ZNAbThZJgnDy", //casa4141
        salt: "$2b$16$jun2/N4pMyTw6uD020Cri.",
        rolId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: "User",
        lastname: "Admin",
        email: "admin@adminsativa.com",
        password:
          "$2b$16$jun2/N4pMyTw6uD020Cri.TFVuzwAWTdnDElOC3D/ZNAbThZJgnDy", //casa4141
        salt: "$2b$16$jun2/N4pMyTw6uD020Cri.",
        rolId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vendedor",
        lastname: "Test",
        email: "vendedor.test@adminsativa.com",
        password:
          "$2b$16$jun2/N4pMyTw6uD020Cri.TFVuzwAWTdnDElOC3D/ZNAbThZJgnDy", //casa4141
        salt: "$2b$16$jun2/N4pMyTw6uD020Cri.",
        rolId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Comprador",
        lastname: "Test",
        email: "comprador.test@adminsativa.com",
        password:
          "$2b$16$jun2/N4pMyTw6uD020Cri.TFVuzwAWTdnDElOC3D/ZNAbThZJgnDy", //casa4141
        salt: "$2b$16$jun2/N4pMyTw6uD020Cri.",
        rolId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
