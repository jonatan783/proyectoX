import React, {useState} from 'react'

import {
  SearchContainer,
  ListOrdersContainer,
  FilterOrderContainer,
} from '../../containers'

import style from './orders.module.scss'

function OrdersView() {
  const [listOrder, setListOrder] = useState([])
  return (
    <div className={style.container}>
      <SearchContainer />
      <div className={style.containerColumn}>
        <FilterOrderContainer setListOrder={setListOrder} />
        <ListOrdersContainer listOrder={listOrder}/>
      </div>
    </div>
  )
}

export default OrdersView