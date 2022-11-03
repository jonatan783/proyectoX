import express from 'express'
import cors from 'cors'
import { portType } from './types'
import db from './db/models/index'
const router = express.Router()
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

const SERVER_PORT: portType = process.env.API_PORT ?? 3006

db.sequelize.sync().then((_data: any) => {
  app.listen(SERVER_PORT, () => {
    console.log(`pagosEnviosMicroService corriendo en puerto ${SERVER_PORT}`)
  })
})
