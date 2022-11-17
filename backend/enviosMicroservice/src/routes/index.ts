import express from 'express'
import pedidosYa from './pedidosYa'
import treggo from './treggo'
const router = express.Router()

router.use('/pedidosya', pedidosYa)
router.use('/treggo', treggo)

export default router
