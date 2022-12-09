import { Schema, model } from 'mongoose'
import { ordenDeEnvíoType } from '../types'

const orderSchema = new Schema<ordenDeEnvíoType>({
  vendedorId: { type: Number, required: true },
  compradorId: { type: Number, required: true },
  ordenCompraId: { type: Number, required: true },
  ordenEnvioId: { type: String, required: true },
  proveedor: { type: String, required: true },
  status: { type: String, required: true },
  costo: { type: Number, required: true, default: 0 },
  precio: { type: Number, required: true, default: 0 }
})

export default model<ordenDeEnvíoType>('ordenDeEnvio', orderSchema)
