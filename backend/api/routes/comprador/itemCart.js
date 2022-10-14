const express = require('express');
const router = express.Router();
const itemCart = require('../../controllers/itemCartController');

router.post('/', itemCart.postOrAdd); // Agregar Item

router.get('/:id', itemCart.getAll); // Buscar item por ID

router.delete('/remove/:id', itemCart.delete); // Eliminar item

module.exports = router;
