import { Schema, model } from 'mongoose'
import { ordenDeEnvíoType } from '../types'

const userSchema = new Schema<ordenDeEnvíoType>({
  vendedorId: { type: Number, required: true },
  compradorId: { type: Number, required: true },
  ordenDeCompraId: { type: Number, required: true }
})

module.exports = model<ordenDeEnvíoType>('ordenDeEnvio', userSchema)
