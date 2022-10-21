const express = require("express");
const router = express.Router();
const orderDetail = require("./orderDetail");
const userValoration = require("./userValoration");

router.use("/detalledeorden", orderDetail);
router.use("/calificar", userValoration);

module.exports = router;
