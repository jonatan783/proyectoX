const { sequelize } = require("../models/index");
const { product } = require("../models");
const productosFake = require('../../utils/productosFake')

const setupSeed = async () => {
  console.log("SEED STARTING");
  const productos = await product.bulkCreate(productosFake);
  return Promise.all([productos]);
};

sequelize.sync({ force: false })
  .then(setupSeed)
  .then(() => {
    console.log("Seed succesfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });