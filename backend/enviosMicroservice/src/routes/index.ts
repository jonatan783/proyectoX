import express from 'express'
import pedidosYa from './pedidosYa'
const router = express.Router()

router.use('/pedidosya', pedidosYa)

export default router
