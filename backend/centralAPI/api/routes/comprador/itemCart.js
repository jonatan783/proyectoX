const express = require('express');
const router = express.Router();
const itemCart = require('../../controllers/itemCartController');
const { isAuth } = require('../../middlewares/jwt');

router.post('/', isAuth, itemCart.postOrAdd); // Agregar Item
// router.put('/', itemCart.postOrAdd); // Hacer ruta para sumar y restar de a uno. Hablar con frontend team
router.get('/:id', isAuth, itemCart.getAll); // Buscar item por ID
router.delete('/remove/:id', isAuth, itemCart.delete); // Eliminar item

module.exports = router;
