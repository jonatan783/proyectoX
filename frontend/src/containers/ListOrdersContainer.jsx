import React from 'react'
import { useSelector } from 'react-redux';
import { ListOrdersComponent } from '../components'

function ListOrdersContainer({order, styles}) {
  const searchOrder = useSelector(state => state.searchOrder)
  console.log(styles)
  console.log(order)
  return (
    <ListOrdersComponent
      order={order}
      payload={searchOrder.loading}
      styles={styles}
    />
  )
}

export default ListOrdersContainer