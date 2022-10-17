const express = require("express");
const router = express.Router();
const category = require("./category");

router.use("/categoria", category);

module.exports = router;
