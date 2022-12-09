import React from 'react'
import { PaginationContainer } from '../../containers'
import Placeholder from 'react-bootstrap/Placeholder';
import style from './listOrder.module.scss'

function
  ListOrdersComponent({
    orders,
    payload,
    styles,
  }) {
    console.log('orders ---> ', orders)
    console.log('payload ---> ',payload)

  return (
    <div className={style.container}>
      {orders && !payload && (orders.length) ?
        <div className={style.containerOrders} /* style={{border: '1px solid red', width: 100}} */>
          {orders?.map((order, i) => (
            <div className={style.orders} key={i} style={{...styles?.orders}}>
              <div className={style.containerImg} style={{width: styles?.containerImg?.width, height: styles?.containerImg?.width,}}>
                <img src={order.img[0]} alt='image product' className={style.img} style={{width: styles?.img?.width, height: styles?.img?.width}}/>
              </div>
              <div className={style.containerData}>
                <span className={style.title} style={{fontSize: styles?.title?.fontSize}}>{order.name}</span>
                {order.precioPromo ?
                  <>
                    <span className={style.discount}>{`${(order.descuento * 100).toFixed(2)} off`}</span>
                    <span className={style.previousPrice}>{`ARG ${order.price},00`}</span>
                    <span className={style.price}>{`ARG ${order.precioPromo},00`}</span>
                  </>
                  :
                  <span className={style.price} style={{fontSize: styles?.price?.fontSize}}>{`ARG ${order.price},00`}</span>
                }
              </div>
            </div>
          ))}
          <span className={style.pagination}>
            <PaginationContainer />
          </span>
        </div>
        :
        <>
          {!payload ?
            <div className={style.notFound}>
              <span className={style.notFoundIcon}></span>
              <span className={style.notFoundTitle}>
                No se encontraron resultados
              </span>
            </div> : null
          }
        </>
      }
      {payload ?
        <div className={style.containerOrders} style={{ justifyContent:'flex-start'}}>
          {[...Array(4).keys()].map(i => (
            <div className={`${style.orders}`} key={i}>
              <Placeholder className={style.containerImg} animation="glow">
                <Placeholder style={{ fontSize: '190px', paddingLeft: '100%' }} />
              </Placeholder>
              <Placeholder className={style.containerData} style={{ width: '76%' }} animation="glow" >
                <Placeholder xs={11} className='fs-2  mt-2' />
                <Placeholder xs={2} className='fs-4  mt-2 text-success' />
                <Placeholder xs={2} className='fs-4  mt-2' />
                <Placeholder xs={3} className='fs-2  mt-2' />
              </Placeholder>
            </div>
          ))}
        </div> : null}

    </div >
  )
}

export default ListOrdersComponent