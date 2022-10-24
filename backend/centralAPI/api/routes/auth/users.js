const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const { recoveryPass } = require('../../middlewares/jwt');

router.post('/register', userController.register); // Registrarse como comprador o como vendedor
router.post('/login', userController.login); // Inicio de sesión
router.put('/:id', userController.userUpdate); // actualizar usuario por id
router.post('/recovery', userController.recovery); // recuperar contraseña
router.put('/recovery/send/:token', recoveryPass, userController.recoverySend); // recuperar contraseña NO FUNCIONA

module.exports = router;
