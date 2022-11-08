/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import consultasController from '../../controllers/consultasController'
const router = express.Router()

router.use('/consulta/pedya/cotizar/:idOrdenDeCompra', consultasController.cotizarPedYa)

export default router
