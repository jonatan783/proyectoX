const express = require('express');
const router = express.Router();
const itemCart = require('../../controllers/itemCartController');

router.post('/', itemCart.postOrAdd); // Agregar Item
// router.put('/', itemCart.postOrAdd); // Hacer ruta para sumar y restar de a uno. Hablar con frontend team
router.get('/:id', itemCart.getAll); // Buscar item por ID
router.delete('/remove/:id', itemCart.delete); // Eliminar item

module.exports = router;
