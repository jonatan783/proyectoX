const express = require("express");
const { isAuth } = require("../../middlewares/jwt");
const router = express.Router();
const orderDetail = require("./orderDetail");
const userValoration = require("./userValoration");

router.use("/detalledeorden", isAuth, orderDetail);
router.use("/calificar", isAuth, userValoration);

module.exports = router;
