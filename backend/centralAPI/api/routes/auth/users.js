const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/register', userController.register); // Registrarse como comprador o como vendedor
router.post('/login', userController.login); // Inicio de sesión
router.put('/:id', userController.userUpdate); //actualizar usuario por id 

module.exports = router;
