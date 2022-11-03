/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { coordenadas } from '../types'

function calcularDistancia (coordIni: coordenadas, coordFin: coordenadas) {
  const rad = function (x: number) { return x * Math.PI / 180 }
  const R: number = 6378.137 // Radio de la tierra en km
  const dLat: number = rad(coordFin.lat - coordIni.lat)
  const dLong: number = rad(coordFin.lon - coordIni.lon)
  const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(coordIni.lat)) *
      Math.cos(rad(coordFin.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d: number = R * c * 1000
  return d
}

export default calcularDistancia
