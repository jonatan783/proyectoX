const express = require("express");
const router = express.Router();
const orderIntemController = require("../../controllers/orderItemController")


router.post('/add', orderIntemController.ItemAdd)
router.get('/getAll/:id',orderIntemController.ItemGetAll);

module.exports = router;