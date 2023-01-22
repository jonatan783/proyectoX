import React from 'react'
import { useSelector } from 'react-redux';
import { ListOrdersComponent } from '../components'

function ListOrdersContainer({order, styles, visableDelete}) {
  const searchOrder = useSelector(state => state.searchOrder)
  return (
    <ListOrdersComponent
      order={order}
      payload={searchOrder.loading}
      styles={styles}
      visableDelete={visableDelete}
    />
  )
}

export default ListOrdersContainer