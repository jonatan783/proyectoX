const express = require('express');
const router = express.Router();
const ValorationController = require('../../controllers/valorationController');
const { isAuth } = require('../../middlewares/jwt');

router.get('/:userId', isAuth, ValorationController.getAllUserValoration);
router.post('/add', isAuth, ValorationController.newUserValoration); // Calificar usuario * se pasa por body:
// -id de orden de compra
// -userId (id del usuario a calificar, puede ser comprador o vendedor)
// -valoration (numero del 1 al 5)
// -rolCalificador (es el rol del usuario que califica)

module.exports = router;