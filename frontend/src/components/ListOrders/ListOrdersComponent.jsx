import React, { useState } from 'react'
import { PaginationContainer } from '../../containers'
import { Link } from 'react-router-dom';
import Placeholder from 'react-bootstrap/Placeholder';
import style from './listOrder.module.scss'

function ListOrdersComponent({ order, payload, styles, visableDelete}) {
  const [visable, setVisable] = useState(false)

  return (
    <div className={style.container} style={{...styles?.container}}>
      {order && !payload && (order.id) ?
        <div className={style.containerOrders}>
          <div className={style.orders} key={order.id} style={{...styles?.orders,}}>
            { visableDelete ? 
              <button className={style.buttonDelete} onClick={() => console.log('boorar este elemento')}>
                <svg xmlns="http://www.w3.org/2000/svg" color="gray" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button> : null
            }
            <Link to={`searchById=${order.id}`} className={style.product}>
              <div className={style.containerImg} style={{width: styles?.containerImg?.width, height: styles?.containerImg?.height, }}>
                <img src={order.img[0]} alt='image product' className={style.img} style={{width: styles?.img?.width, height: styles?.img?.height,}}/>
              </div>
            </Link>
            <Link to={`searchById=${order.id}`} className={style.product}>
              <div className={style.containerData}>
                <span className={style.title} style={{fontSize: styles?.title?.fontSize}}>{order.name}</span>
                {order.precioPromo ?
                  <>
                    <span className={style.discount}>{`${(order.descuento * 100).toFixed(2)} off`}</span>
                    <span className={style.previousPrice}>{`ARS ${order.price},00`}</span>
                    <span className={style.price}>{`ARS ${order.precioPromo},00`}</span>
                  </>
                  :
                  <span className={style.price} style={{fontSize: styles?.price?.fontSize}}>{`ARS ${order.price},00`}</span>
                }
              </div>
            </Link>
          </div>
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
        <div className={style.containerOrders} style={{ justifyContent:'flex-start'}}>sadasdsa
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