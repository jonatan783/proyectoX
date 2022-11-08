import React from 'react'

import {
  SearchContainer,
  ListOrdersContainer,
  FilterOrderContainer,
} from '../../containers'

import style from './orders.module.scss'

function OrdersView() {

  return (
    <div className={style.container}>
      <SearchContainer />
      <div className={style.containerColumn}>
        <FilterOrderContainer/>
        <ListOrdersContainer />
      </div>
    </div>
  )
}

export default OrdersView