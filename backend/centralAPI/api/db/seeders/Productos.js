"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        img: ["https://http2.mlstatic.com/D_NQ_NP_809902-MLA49364185421_032022-W.jpg", ],
        name: "Picador Rey Corona Skull Metal 3 Partes Pikachu Triturador",
        price: 450,
        stock: 15,
        categorias: ["Otros"],
        description: "Triturador Picador Metalico | REY3 Partes Calidad Premium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: ["https://http2.mlstatic.com/D_NQ_NP_836467-MLA47448916673_092021-O.webp"],
        name: "Top Barrier 250ml Insecticida Top Crop Club Cannabico",
        price: 1100,
        stock: 20,
        categorias: ["Fertilizantes"],
        description: "CLUB CANNABICO GROWSHOP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: ["https://http2.mlstatic.com/D_NQ_NP_975546-MLA50730521675_072022-O.webp"],
        name: "Papelillos Sedas",
        price: 100,
        stock: 20,
        categorias: ["Otros"],
        description: "Papelillos Sedas Para Armar Gizeh Black 78mm Extra Fino",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: ["https://http2.mlstatic.com/D_NQ_NP_723768-MLA31132817922_062019-O.webp"],
        name: "Semillas mariguana",
        price: 100,
        stock: 20,
        categorias: ["Semillas"],
        description: "papel de 8x5cm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  },
};
