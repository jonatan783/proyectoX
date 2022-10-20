const express = require('express');
const router = express.Router();
const orderDetail = require('./orderDetail')

router.use("/detalledeorden", orderDetail);

module.exports = router;