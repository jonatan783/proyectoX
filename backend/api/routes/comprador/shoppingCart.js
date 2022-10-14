const express = require('express');
const router = express.Router();
const shoppingCartController = require('../../controllers/shoppingCartController');

router.post('/:id', shoppingCartController.cartCreate); // Crear carrito (esta ruta no va, el carrito se debe crear y asignar al registrar comprador)
router.put('/total', shoppingCartController.cartUpdate); // Actualiza el carrito (esto no va)
router.delete('/:id', shoppingCartController.cartDestroy); // Elimina el carrito (no va)

module.exports = router;
