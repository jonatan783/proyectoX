/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import axios from 'axios'
import {} from 'dotenv/config'
import newTokenTreggo from '../middleware/newTokenTreggo'
import Secret from '../db/Secret'
import { getSecretType, reqCotizarType, reqShipmentCreationType } from '../types'

class TreggoController {
  static async saveToken (_req: any, res: any) {
    try {
      const { data }: any = await axios.post('http://api.ar.treggo.co/1/token', {
        email: process.env.MAIL_TREGGO,
        secret: process.env.SECRET_TREGGO,
        mode: process.env.MODE_TREGGO
      })
      const secret = new Secret({ service: 'treggo', token: data.token })
      await secret.save()
      return res.status(200).json('Token generado y guardado con éxito')
    } catch (err: any) {
      return res.status(500).json(err)
    }
  }

  static async costo (req: { body: reqCotizarType }, res: any) {
    const { volumen, peso, latComprador, lonComprador, addressComprador, cityComprador, addressVendedor, cityVendedor, latVendedor, lonVendedor, orderItems, zipComprador, zipVendedor, type } = req.body
    const sendInfo: any = {
      pickup: {
        address: addressVendedor,
        locality: cityVendedor,
        latitude: latVendedor.toString(),
        longitude: lonVendedor.toString(),
        zip: zipVendedor
      },
      delivery: {
        address: addressComprador,
        latitude: latComprador.toString(),
        longitude: lonComprador.toString(),
        locality: cityComprador,
        zip: zipComprador
      },
      size: {
        weight: peso,
        volumetric: volumen
      },
      method: type,
      type: 'auto',
      packages: orderItems.length // modificar, solo pasar cantidad de paquetes, no la info de cada paquete
    }
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'treggo' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const { data }: any = await axios.post('http://api.ar.treggo.co/1/rates', sendInfo, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data.price)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 401') {
        await newTokenTreggo()
        await TreggoController.costo(req, res)
      } else {
        console.log(err)
        return res.status(500).json(err.error)
      }
    }
  }

  static async shipmentCreation (req: { body: reqShipmentCreationType }, res: any) {
    const { ordenCompraId, volumen, peso, emailComprador, nameComprador, latComprador, lonComprador, addressComprador, additionalComprador, cityComprador, celuComprador, nameVendedor, addressVendedor, additionalVendedor, cityVendedor, latVendedor, lonVendedor, celuVendedor, emailVendedor, orderItems, zipComprador, zipVendedor, type } = req.body
    console.log(ordenCompraId, 'para guardar en db mongo')
    const sendInfo: any = {
      origin: {
        type: 'API',
        id: 'R834532353',
        store: 'Sativa'
      },
      pickup: {
        address: addressVendedor,
        door: additionalVendedor,
        contact: nameVendedor,
        locality: cityVendedor,
        zip: zipVendedor,
        email: emailVendedor,
        phone: celuVendedor,
        latitude: latVendedor.toString(),
        longitude: lonVendedor.toString()
      },
      delivery: {
        address: addressComprador,
        door: additionalComprador,
        locality: cityComprador,
        zip: zipComprador,
        contact: nameComprador,
        email: emailComprador,
        phone: celuComprador,
        latitude: latComprador.toString(),
        longitude: lonComprador.toString()
      },
      size: {
        weight: peso,
        volumetric: volumen
      },
      method: type,
      type: 'auto',
      packages: orderItems.length // modificar, solo pasar cantidad de paquetes, no la info de cada paquete
    }
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'treggo' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const { data }: any = await axios.post('http://api.ar.treggo.co/1/shipment', sendInfo, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 401') {
        await newTokenTreggo()
        await TreggoController.shipmentCreation(req, res)
      } else {
        console.log(err)
        return res.status(500).json(err.message)
      }
    }
  }

  static async cancelOrden (req: { body: { id: string } }, res: any) {
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'treggo' })
      const Authorization: string = (secret != null) ? secret.token : ''
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios.put('http://api.ar.treggo.co/1/shipment/cancel', req.body, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newTokenTreggo()
        await TreggoController.cancelOrden(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async getStatus (req: { params: { id: string } }, res: any) {
    const { id } = req.params
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'treggo' })
      const Authorization: string = (secret != null) ? secret.token : ''
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios.get(`http://api.ar.treggo.co/1/shipment/${id}`, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newTokenTreggo()
        await TreggoController.getStatus(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async getEtiqueta (req: { params: { id: string } }, res: any) {
    const { id } = req.params
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'treggo' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const opt: any = {
        method: 'get',
        url: `http://api.ar.treggo.co/1/shipment/${id}/label/a4`,
        responseType: 'arraybuffer',
        responseEncoding: 'binary',
        headers: {
          Authorization
        }
      }
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios(opt)
      res.contentType('application/pdf')
      return res.status(200).send(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newTokenTreggo()
        await TreggoController.getEtiqueta(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }
}
export default TreggoController
