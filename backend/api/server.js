const express = require("express");
const cors = require("cors");
const db = require("./db");
const routes = require("./routes");
const morgan = require("morgan");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", routes);

const SERVER_PORT = process.env.API_PORT || 3002

db.sync({alter: true}).then((data) => {
  app.listen(SERVER_PORT, (req, res) => {
    console.log("Server Listening on port: " + SERVER_PORT);
  });
});