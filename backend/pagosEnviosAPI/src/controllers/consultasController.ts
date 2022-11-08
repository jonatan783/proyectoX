/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-extraneous-class */
// import axios from 'axios'
import {} from 'dotenv/config'
const { orderdetail, orderitem, product } = require('../db/models')

class consultasController {
  static async cotizarPedYa (req: { params: any }, res: any) {
    const { idOrdenDeCompra } = req.params
    try {
      const ordenCompra: any = await orderdetail.findOne({
        where: {
          id: idOrdenDeCompra
        },
        include: {
          model: orderitem,
          include: {
            model: product
          }
        }
      })
      res.status(200).send(ordenCompra)
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
export default consultasController
