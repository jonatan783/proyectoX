/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import {} from 'dotenv/config'
import isAuth from '../middleware/Auth'
import Secret from '../db/Secret'

class PedidosYaController {
  static async cobertura (req: any, res: any) {
    try {
      const [{ token }] = await Secret.find()
      const { data } = await axios.post('https://courier-api.pedidosya.com/v1/estimates/coverage', {
        waypoints: [
          {
            latitude: req.body.origenLat,
            longitude: req.body.origenLon
          },
          {
            latitude: req.body.destinoLat,
            longitude: req.body.destinoLon
          }
        ]
      }, {
        headers: {
          Authorization: token
        }
      })
      return res.status(200).json(data.waypoints)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await isAuth()
        void this.cobertura(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }
}
export default PedidosYaController
