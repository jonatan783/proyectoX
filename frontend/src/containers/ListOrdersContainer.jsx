import React from 'react'
import { useSelector } from 'react-redux';
import { ListOrdersComponent } from '../components'

function ListOrdersContainer() {
  const searchOrder = useSelector(state => state.searchOrder)
  return (
    <ListOrdersComponent
      orders={searchOrder.data}
      payload={searchOrder.loading}
    />
  )
}

export default ListOrdersContainer