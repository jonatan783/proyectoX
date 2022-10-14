const express = require("express");
const cors = require("cors");
const db = require("./db");
const routes = require("./routes");
const morgan = require("morgan");
//require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", routes);

const port = 3009;


db.sync({ force: false }).then(() => {
  app.listen(port, function () {
    console.log(`Listening on port http://localhost:${port}`);
  });
});