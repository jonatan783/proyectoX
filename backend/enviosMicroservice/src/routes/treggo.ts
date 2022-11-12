/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import TreggoController from '../controller/treggo'
const router = express.Router()

router.post('/token', TreggoController.saveToken) // consultar si la zona tiene cobertura de flota
router.post('/cotizar', TreggoController.costo) // consultar costo de envío
router.post('/shipmentcreation', TreggoController.shipmentCreation) // crear orden de envío
router.post('/confirmar/:id', TreggoController.confirmarOrdenEnvio) // confirmar orden de envío
router.get('/getAll', TreggoController.getOrdenesEnvio) // busca todas las ordenes por rango de fechas (maximo 15 días atras)
router.get('/get/:id', TreggoController.getOrdenDetalle) // busca orden por id
router.post('/cancel/:id', TreggoController.cancelOrden) // cancelar orden (solo en estado confirmada)

export default router
