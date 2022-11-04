import React from 'react'
import { OrderContainer } from '../../containers';
import Carousel from 'react-bootstrap/Carousel';
import style from './carrouselProduct.module.scss';

function carrouselProductComponent({ orders }) {
    console.log('data=>', orders)
    return (
        <Carousel variant="dark"  fade className={style.containerCarrousel}>
            {orders?.map((order, i) => (

                <Carousel.Item interval={4000} key={i}>
                    <div className={style.containerOrders}>
                        
                        {order?.map((orderSingle, i) => (
                            <div key={i}>
                                <OrderContainer order={orderSingle} />
                            </div>
                        ))}

                    </div>
                </Carousel.Item>
            ))}

        </Carousel>
    )
}

export default carrouselProductComponent