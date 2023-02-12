import React from 'react'

import {
  SearchContainer,
  ListOrdersContainer,
  FilterOrderContainer,
  PaginationContainer
} from '../../containers'
import { useSelector } from 'react-redux';
import style from './orders.module.scss'

function OrdersView() {
  const searchOrders = useSelector(state => state.searchOrder)
  
  return (
    <div className={style.container}>
      <SearchContainer />
      <div className={style.containerColumn}>
        <FilterOrderContainer />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div>{searchOrders?.data?.map((searchOrder, index) => <ListOrdersContainer key={index} order={searchOrder}/> )}</div>
          <div><PaginationContainer/></div>
        </div>
      </div>
    </div>
  )
}

export default OrdersView