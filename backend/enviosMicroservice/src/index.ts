import express from 'express'
import cors from 'cors'
import { portType } from './types'
import mongoose from 'mongoose'
import routes from './routes/index'
import {} from 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

const SERVER_PORT: portType = process.env.API_PORT ?? 3106
const dbUrl: string = process.env.DB_URL ?? 'mongodb://localhost:27017/test'

void mongoose.connect(dbUrl).then((_data: any) => {
  app.listen(SERVER_PORT, () => {
    console.log(`EnviosMicroservice corriendo en puerto ${SERVER_PORT}`)
  })
})
