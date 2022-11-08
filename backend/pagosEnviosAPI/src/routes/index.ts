import express from 'express'
import consulta from './envios/consulta'
const router = express.Router()

router.use('/api', consulta)

export default router
