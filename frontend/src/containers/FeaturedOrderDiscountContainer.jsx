import React from 'react'
import {CarrouselProductContainer} from '../containers'
import {order} from '../jsonData/FakedataOrders'

function FeaturedOrderDiscountContainer() {
    //pedido al backend
  return (
      <CarrouselProductContainer order={order}/>
  )
}

export default FeaturedOrderDiscountContainer