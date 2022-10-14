const express = require('express');
const router = express.Router();
const orderDetail = require('./orderDetail')
const orderItem = require('./orderItem')

router.use("/detalledeorden", orderDetail);
router.use("/itemdeorden", orderItem);

module.exports = router;