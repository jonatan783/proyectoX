import React from 'react'
import { useSelector } from 'react-redux';
import { ListOrdersComponent } from '../components'

function ListOrdersContainer({styles}) {
  const searchOrder = useSelector(state => state.searchOrder)
  console.log(styles)
  return (
    <ListOrdersComponent
      orders={searchOrder.data}
      payload={searchOrder.loading}
      styles={styles}
    />
  )
}

export default ListOrdersContainer