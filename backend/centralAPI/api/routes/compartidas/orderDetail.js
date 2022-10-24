const express = require('express');
const router = express.Router();
const orderDetailController = require('../../controllers/orderDetailController');
const { isAuth } = require('../../middlewares/jwt');


router.post('/createOrderDetail', isAuth, orderDetailController.newOrden); // Agregar orden de compra *falta que corrobore y modifique stock y hacer el html para mandar el mail a las partes!
router.put('/modifyStatus/:id', isAuth, orderDetailController.OrderUpdate); // Actualizar Orden de compra * solo deberia actualizarse el estado (entra en juego el pago y el vendedor)
router.get('/historial/:userId/:rol', isAuth, orderDetailController.orderGetAll); // Historial de ordenes
router.get('/getorder/:id', isAuth, orderDetailController.orderGetOne); // Buscar orden por Id

module.exports = router;