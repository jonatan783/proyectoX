// export type whater = 'suny' | 'rain'

// export interface muestra {
//   id: number
//   name: string
//   otro: whater
// }

// export interface muestraEspecial extends muestra {
//   extra: string[]
// }

// export type muestraSinOtro = omit<muestra, 'otro'>

export type portType = string | 3106

export interface ordenDeEnvíoType {
  vendedorId: number
  compradorId: number
  ordenDeCompraId: number
}

export interface secret {
  token: string
}
