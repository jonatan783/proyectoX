/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import PedidosYaController from '../controller/pedidosYa'
const router = express.Router()

router.post('/cobertura', PedidosYaController.cobertura)

export default router
