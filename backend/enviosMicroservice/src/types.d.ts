export type portType = string | 3106

export interface ordenDeEnvíoType {
  vendedorId: number
  compradorId: number
  ordenDeCompraId: number
}

export interface secret {
  token: string
}

export interface devToken {
  access_token: string
}

export interface bodyReqType {
  origenLat: number
  origenLon: number
  destinoLat: number
  destinoLon: number
}

export interface coordenadas {
  lat: number
  lon: number
}

export interface sendInfoType {
  referenceId: string | number
  isTest: boolean
  deliveryTime: any
  notificationMail: string
  volume: number
  weight: number
  waypoints: array[object]
  items: array[object]
}

export interface reqNuevaOrden {
  ordenCompraId: number | string
  volumen: number
  peso: number
  emailComprador: string
  nameComprador: string
  latComprador: number
  lonComprador: number
  addressComprador: string
  additionalComprador: string
  cityComprador: string
  instrComprador: string
  nameVendedor: string
  addressVendedor: string
  additionalVendedor: string
  cityVendedor: string
  latVendedor: number
  lonVendedor: number
  celuVendedor: string
  celuComprador: string
  instrVendedor: stringorder
  orderItems: array[object]
}

export interface getOrdenesEnvio {
  fromDate: string
  toDate: string
}
