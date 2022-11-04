import React from 'react'
import { CarrouselProductComponent } from '../components'


function CarrouselProductContainer({ order }) {
  return (
    <CarrouselProductComponent
      orders={order}
    />
  )
}

export default CarrouselProductContainer