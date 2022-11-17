/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import axios from 'axios'
import {} from 'dotenv/config'
import newToken from '../middleware/newToken'
import Secret from '../db/Secret'
import { bodyReqType, sendInfoType, reqNuevaOrden, getOrdenesEnvio, getSecretType } from '../types'
import calcularDistancia from '../utils/utils'
import timeConverter from '../utils/timeConverter'

class PedidosYaController {
  static async cobertura (req: { body: bodyReqType }, res: any) {
    const distancia: number = calcularDistancia({ lat: req.body.origenLat, lon: req.body.origenLon }, { lat: req.body.destinoLat, lon: req.body.destinoLon })
    if (distancia >= 14500) {
      return res.status(200).send({ disponible: false, motivo: 'Distancia supera los 15 km permitidos' })
    }
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
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
          Authorization
        }
      })
      if (data.waypoints[0].status === 'OK' && data.waypoints[1].status === 'OK') return res.status(200).send({ disponible: true, motivo: 'Hay cobertura en origen y destino' })
      return res.status(200).send({ disponible: false, motivo: 'No hay cobertura en al menos uno de los puntos' })
    } catch (err: any) {
      console.log('token es viejo', err.message)
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.cobertura(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async costo (req: { body: reqNuevaOrden }, res: any) {
    const { ordenCompraId, volumen, peso, emailComprador, nameComprador, latComprador, lonComprador, addressComprador, additionalComprador, cityComprador, celuComprador, instrComprador, nameVendedor, addressVendedor, additionalVendedor, cityVendedor, latVendedor, lonVendedor, celuVendedor, instrVendedor, orderItems } = req.body
    const sendInfo: sendInfoType = {
      referenceId: ordenCompraId,
      isTest: true, // depende el entorno (en produccion es false)
      deliveryTime: new Date(), // hora de entrega deseada
      notificationMail: emailComprador,
      volume: volumen,
      weight: peso,
      waypoints: [
        {
          type: 'PICK_UP', // origen
          addressStreet: addressVendedor,
          addressAdditional: additionalVendedor,
          city: cityVendedor,
          latitude: latVendedor,
          longitude: lonVendedor,
          phone: celuVendedor,
          name: nameVendedor,
          instructions: instrVendedor,
          order: 1
        },
        {
          type: 'DROP_OFF', // destino
          latitude: latComprador,
          longitude: lonComprador,
          addressStreet: addressComprador,
          addressAdditional: additionalComprador,
          city: cityComprador,
          phone: celuComprador,
          name: nameComprador,
          instructions: instrComprador,
          order: 2
        }
      ],
      items: orderItems.map((item: any) => {
        return {
          categoryId: 96467277,
          value: item.price,
          quantity: item.quantity,
          description: item.product.name,
          sku: 'default',
          volume: item.product.volumen,
          weight: item.product.peso
        }
      })
    }
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const { data }: any = await axios.post('https://courier-api.pedidosya.com/v1/estimates/shippings', sendInfo, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data.price)
    } catch (err: any) {
      console.log('token es viejo', err.message)
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.costo(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async nuevaOrdenEnvio (req: { body: reqNuevaOrden }, res: any) {
    const { ordenCompraId, volumen, peso, emailComprador, nameComprador, latComprador, lonComprador, addressComprador, additionalComprador, cityComprador, celuComprador, instrComprador, nameVendedor, addressVendedor, additionalVendedor, cityVendedor, latVendedor, lonVendedor, celuVendedor, instrVendedor, orderItems } = req.body
    const sendInfo: sendInfoType = {
      referenceId: ordenCompraId,
      isTest: true,
      deliveryTime: timeConverter(),
      notificationMail: emailComprador,
      volume: volumen,
      weight: peso,
      items: orderItems.map((item: any) => {
        return {
          categoryId: 96467277,
          value: item.price,
          description: item.product.name,
          sku: 'default',
          quantity: item.quantity,
          volume: item.product.volumen,
          weight: item.product.peso
        }
      }),
      waypoints: [
        {
          type: 'PICK_UP',
          addressStreet: addressVendedor,
          addressAdditional: additionalVendedor,
          city: cityVendedor,
          latitude: latVendedor,
          longitude: lonVendedor,
          phone: celuVendedor,
          name: nameVendedor,
          instructions: instrVendedor,
          order: 1
        },
        {
          type: 'DROP_OFF',
          latitude: latComprador,
          longitude: lonComprador,
          addressStreet: addressComprador,
          addressAdditional: additionalComprador,
          city: cityComprador,
          phone: celuComprador,
          name: nameComprador,
          instructions: instrComprador,
          order: 2
        }
      ]
    }
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const { data }: any = await axios.post('https://courier-api.pedidosya.com/v1/shippings', sendInfo, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.nuevaOrdenEnvio(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async confirmarOrdenEnvio (req: { params: { id: string } }, res: any) {
    const { id } = req.params
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios.post(`https://courier-api.pedidosya.com/v1/shippings/${id}/confirm`, {}, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.confirmarOrdenEnvio(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async getOrdenesEnvio (req: { query: getOrdenesEnvio }, res: any) {
    const { fromDate, toDate } = req.query
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      const { data }: any = await axios.get(`https://courier-api.pedidosya.com/v1/shippings?fromDate=${fromDate}&toDate=${toDate}`, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.getOrdenesEnvio(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async getOrdenDetalle (req: { params: { id: string } }, res: any) {
    const { id } = req.params
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios.get(`https://courier-api.pedidosya.com/v1/shippings/${id}`, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.getOrdenDetalle(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async cancelOrden (req: { params: { id: string }, body: { reasonText: string } }, res: any) {
    const { id } = req.params
    try {
      const secret: getSecretType | null = await Secret.findOne({ service: 'pedidosya' })
      const Authorization: string = (secret != null) ? secret.token : ''
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data }: any = await axios.post(`https://courier-api.pedidosya.com/v1/shippings/${id}/cancel`, req.body, {
        headers: {
          Authorization
        }
      })
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.message === 'Request failed with status code 403') {
        await newToken()
        await PedidosYaController.cancelOrden(req, res)
      } else {
        return res.status(500).json(err.message)
      }
    }
  }

  static async saveToken (_req: any, res: any) {
    try {
      const { data }: any = await axios.post('https://auth-api.pedidosya.com/v1/token', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'password',
        password: process.env.PASSWORD,
        username: process.env.USERNAME
      })
      const secret = new Secret({ service: 'pedidosya', token: data.access_token })
      await secret.save()
      return res.status(200).json('Token generado y guardado con éxito')
    } catch (err: any) {
      console.log(err)
      return res.status(500).json('No se pudo generar o guardar token')
    }
  }
}
export default PedidosYaController
