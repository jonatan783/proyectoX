/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import TreggoController from '../controller/treggo'
const router = express.Router()

router.post('/token', TreggoController.saveToken) // generar token
router.post('/cotizar', TreggoController.costo) // consultar costo de envío
router.post('/shipmentcreation', TreggoController.shipmentCreation) // crear orden de envío
router.put('/cancel', TreggoController.cancelOrden) // cancelar orden (solo en estado confirmada)
router.get('/status/:id', TreggoController.getStatus) // ver estado por id
router.get('/etiqueta/:id', TreggoController.getEtiqueta) // imprimir etiqueta.
router.get('/envios', TreggoController.getNuevosEnvios) // imprimir etiqueta.

export default router
