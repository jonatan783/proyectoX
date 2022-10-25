const express = require('express');
const router = express.Router();
const itemCart = require('./itemCart');
const productComment = require('./productComment');
const productValoration = require('./productValoration');
const searchByTag = require('./searchByTag');

router.use("/itemcarro", itemCart);
router.use("/comentario", productComment);
router.use("/valoracion", productValoration);
router.use("/search", searchByTag);

module.exports = router;