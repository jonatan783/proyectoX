import React from 'react'
import { PaginationContainer, SpinnerContainer } from '../../containers'
import style from './listOrder.module.scss'

function ListOrdersComponent({ orders }) {
  return (
    <div className={style.container}>

      {orders?.map((order, i) => (
        <div className={style.orders} key={i}>
          <div className={style.containerImg}>
            <img src={order.img[0]} alt='image product' className={style.img} />
          </div>
          <div className={style.containerData}>
            <span className={style.title}>{order.name}</span>
            {order.precioPromo ?
              <>
                <span className={style.discount}>{`${(order.descuento * 100).toFixed(2)} off`}</span>
                <span className={style.previousPrice}>{`ARG ${order.price},00`}</span>
                <span className={style.price}>{`ARG ${order.precioPromo},00`}</span>
              </>
              :
              <span className={style.price}>{`ARG ${order.price},00`}</span>
            }
          </div>
        </div>
      ))}
      <span className={style.pagination}>
        <PaginationContainer />
        <SpinnerContainer />
      </span>
    </div>
  )
}

export default ListOrdersComponent