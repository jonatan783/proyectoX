const express = require('express');
const router = express.Router();
const shoppingCart = require('./shoppingCart');
const itemCart = require('./itemCart');
const productComment = require('./productComment');
const productValoration = require('./productValoration');

router.use("/carrito", shoppingCart);
router.use("/itemcarro", itemCart);
router.use("/comentario", productComment);
router.use("/valoracion", productValoration);

module.exports = router;