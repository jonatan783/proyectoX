export type portType = string | 3106

export interface ordenDeEnvíoType {
  vendedorId: number
  compradorId: number
  ordenCompraId: number
  ordenEnvioId: string
  proveedor: 'pedidosya' | 'treggo'
  status: string
  precio: number
  costo: number
}

export interface secret {
  token: string
  service: string
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
  compradorId: number
  vendedorId: number
}

export interface getOrdenesEnvio {
  fromDate: string
  toDate: string
}

export interface getSecretType {
  token: string
}

export interface reqCotizarType {
  volumen: number
  peso: number
  latComprador: number
  lonComprador: number
  addressComprador: string
  cityComprador: string
  addressVendedor: string
  cityVendedor: string
  latVendedor: number
  lonVendedor: number
  orderItems: array[object]
  zipComprador: number
  zipVendedor: number
  type: string
}

export interface reqShipmentCreationType extends reqCotizarType {
  ordenCompraId: number
  emailComprador: string
  nameComprador: string
  additionalComprador: string
  celuComprador: string
  nameVendedor: string
  additionalVendedor: string
  celuVendedor: string
  emailVendedor: string
  vendedorId: number
  compradorId: string
}

export interface pedidosTokenType {
  access_token: string
}
export interface tokenResponseType {
  data: pedidosTokenType
}

export interface testEnvioType {
  id: string
  status: string
}
