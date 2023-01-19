/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import PedidosYaController from '../controller/pedidosYa'
const router = express.Router()

router.post('/token', PedidosYaController.saveToken) // consultar si la zona tiene cobertura de flota
router.post('/cobertura', PedidosYaController.cobertura) // consultar si la zona tiene cobertura de flota
router.post('/cotizar', PedidosYaController.costo) // consultar costo de envío
router.post('/setorden', PedidosYaController.nuevaOrdenEnvio) // crear orden de envío
router.post('/confirmar/:id', PedidosYaController.confirmarOrdenEnvio) // confirmar orden de envío
router.post('/cancel/:id', PedidosYaController.cancelOrden) // cancelar orden (solo en estado confirmada)

router.get('/getAll', PedidosYaController.getOrdenesEnvio) // busca todas las ordenes por rango de fechas (maximo 15 días atras)
router.get('/get/:id', PedidosYaController.getOrdenDetalle) // busca orden por id
router.get('/getcallback', PedidosYaController.getCallback) // busca las rutas de callback
router.get('/setcallback', PedidosYaController.setCallback) // setea las rutas de callback
router.get('/status', PedidosYaController.callbackReciver) // recibe los cambios de estado desde pedidos ya

export default router
