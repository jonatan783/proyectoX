/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import {} from 'dotenv/config'
import Secret from '../db/Secret'

const newTokenTreggo = async () => {
  try {
    const { data }: any = await axios.post('http://api.ar.treggo.co/1/token', {
      email: process.env.MAIL_TREGGO,
      secret: process.env.SECRET_TREGGO,
      mode: process.env.MODE_TREGGO
    })
    const secret: any = await Secret.findOne({ service: 'treggo' })
    secret.token = data.token
    await secret.save()
    console.log('actualizado!')
    return 'actualizado'
  } catch (err: any) {
    console.log('error2', err)
    throw err
  }
}

export default newTokenTreggo
