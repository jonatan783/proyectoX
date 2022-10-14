const express = require('express');
const router = express.Router();
const valorationController = require('../../controllers/valorationController')



router.post('/add/:productId',valorationController.valorationAdd);
router.get('/getAll/:productId',valorationController.getAll);

module.exports = router






