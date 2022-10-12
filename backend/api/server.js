const express = require("express");
// const db = require("./db");
// const routes = require("./routes");
const morgan = require("morgan");
// require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
// app.use("/api", routes);

SERVER_PORT = process.env.PORT || 3002

console.log(SERVER_PORT);

// db.sync({ force: false }).then((data) => {
//   app.listen(SERVER_PORT, (req, res) => {
//     console.log("Server Listening on port: " + SERVER_PORT);
//   });
// });

app.listen(SERVER_PORT, (req, res) => {
  console.log(`Server running in port: ${SERVER_PORT}`);
});