const express = require("express");
const router = express.Router();
const product = require("./product");
const userAddInfo = require("./userAddInfo");

router.use("/addinfo", userAddInfo);
router.use("/product", product);

module.exports = router;
