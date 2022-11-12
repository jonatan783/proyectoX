import { Schema, model } from 'mongoose'
import { secret } from '../types'

const secretSchema = new Schema<secret>({
  token: { type: String, required: true },
  service: { type: String, required: true, unique: true }
})

export default model<secret>('secret', secretSchema)
