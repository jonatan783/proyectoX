import React from 'react'
import { PaginationContainer } from '../../containers'
import style from './listOrder.module.scss'

function ListOrdersComponent({ orders }) {
  return (
    <div className={style.container}>

      {orders?.map(order => (
        <div className={style.orders} key={order.title}>
          <div className={style.containerImg}>
            <img src={order.img[0]} alt='image product' className={style.img} />
          </div>
          <div className={style.containerData}>
            <span className={style.title}>{order.title}</span>
            {order.discount ? <>
              <span className={style.discount}>{order.discount}</span>
              <span className={style.previousPrice}>{order.previousPrice}</span>
            </> : null}
            <span className={style.price}>{order.price}</span>
          </div>
        </div>
      ))}
      <span className={style.pagination}>
      <PaginationContainer />
      </span>
    </div>
  )
}

export default ListOrdersComponent