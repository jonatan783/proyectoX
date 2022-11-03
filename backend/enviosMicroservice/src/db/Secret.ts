import { Schema, model } from 'mongoose'
import { secret } from '../types'

const secretSchema = new Schema<secret>({
  token: { type: String, required: true }
})

export default model<secret>('secret', secretSchema)
