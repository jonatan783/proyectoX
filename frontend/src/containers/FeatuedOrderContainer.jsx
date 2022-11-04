import React from 'react'
import {CarrouselProductContainer} from '../containers'
import { featuredOrder } from '../jsonData/FakedataOrders'

function FeatuedOrderContainer() {
    //pedido al backen para las ordenes en promoción
  return (
      <CarrouselProductContainer order = {featuredOrder}/>
  )
}

export default FeatuedOrderContainer