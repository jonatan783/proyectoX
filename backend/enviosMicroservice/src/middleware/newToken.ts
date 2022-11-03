/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import {} from 'dotenv/config'
import Secret from '../db/Secret'

const newToken = async () => {
  const [{ token }] = await Secret.find()
  try {
    const { data }: any = await axios.post('https://auth-api.pedidosya.com/v1/token', {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'password',
      password: process.env.PASSWORD,
      username: process.env.USERNAME
    })
    const secret: any = await Secret.findOne({ token })
    secret.token = data.access_token
    await secret.save()
    console.log('actualizado!')
    return 'actualizado'
  } catch (err: any) {
    console.log('error2', err)
    throw err
  }
}

export default newToken
