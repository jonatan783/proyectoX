const express = require('express');
const router = express.Router();
const valorationController = require('../../controllers/valorationController')

router.post('/add/:productId',valorationController.valorationAdd); // Agregar puntuación
router.get('/getAll/:productId',valorationController.getAll); // Ver puntuación

module.exports = router