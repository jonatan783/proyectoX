/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import cors from 'cors'
import routes from './routes/index'
import { portType } from './types'
import {} from 'dotenv/config'
const { sequelize } = require('./db/models/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)

const SERVER_PORT: portType = process.env.API_PORT ?? 3006

sequelize.sync().then((_data: any) => {
  app.listen(SERVER_PORT, () => {
    console.log(`pagosEnviosMicroService corriendo en puerto ${SERVER_PORT}`)
  })
})
