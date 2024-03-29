const express = require("express");
const cors = require("cors");
// const db = require("./models/index");
const { sequelize } = require('./db/models/index')
const routes = require("./routes");
const morgan = require("morgan");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", routes);

const SERVER_PORT = process.env.API_PORT || 3002

sequelize.sync({force: false}).then((data) => {
  app.listen(SERVER_PORT, (req, res) => {
    console.log("Server centralAPI corriendo en puerto " + SERVER_PORT);
  });
});