import React from 'react'
import { ListOrdersComponent } from '../components'
//import { orders } from '../jsonData/FakedataOrders'

function ListOrdersContainer({ listOrder }) {
  return (
    <ListOrdersComponent orders={listOrder} />
  )
}

export default ListOrdersContainer