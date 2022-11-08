import React from 'react'
import { ListOrdersComponent } from '../components'
import { orders } from '../jsonData/FakedataOrders'

function ListOrdersContainer() {
  return (
    <ListOrdersComponent orders={orders} />
  )
}

export default ListOrdersContainer