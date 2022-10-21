const express = require('express');
const router = express.Router();
const orderDetailController = require('../../controllers/orderDetailController');


router.post('/createOrderDetail', orderDetailController.newOrden); // Agregar orden de compra *falta que corrobore y modifique stock y hacer el html para mandar el mail a las partes!
router.put('/modifyStatus/:id', orderDetailController.OrderUpdate); // Actualizar Orden de compra * solo deberia actualizarse el estado (entra en juego el pago y el vendedor)
router.get('/historial/:userId/:rol', orderDetailController.orderGetAll); // Historial de ordenes
router.get('/getorder/:id', orderDetailController.orderGetOne); // Buscar orden por Id

module.exports = router;