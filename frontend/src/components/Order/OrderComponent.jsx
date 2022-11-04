import React from 'react';
import style from './order.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
function OrderComponent({
    order,
    above,
    handleAbove,
    image,
    left,
    handleLeft,
    right,
    handleRight,
}) {

    return (
        <div className={style.containerOrder}>

            {left ?
                <div className={`${style.buttonLeft} ${style.buttonsSide}`}
                    onClick={() => handleLeft()}>
                    <HiChevronLeft />
                </div> : null}

            <div >
                <img src={image}
                    alt='image product'
                    className={style.img}
                    onMouseEnter={() => { if (above !== true) handleAbove(true) }}
                    onMouseLeave={() => handleAbove(false)}
                />
                <div className={style.title}>{order.title}</div>
            </div>

            {right ? <div className={`${style.buttonRight} ${style.buttonsSide}`}
                onClick={() => handleRight()}>
                <HiChevronRight />
            </div> : null}

            {
                order.discount ?
                    <div className={style.front}>
                        <div className={style.discount}>
                            {order.discount}
                        </div>
                    </div>
                    : null
            }

            <div>
                <div className={style.price}>{order.price}</div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <button className={style.buyButton}>
                        Comprar
                    </button>
                </div>
            </div>
        </div >
    )
}

export default OrderComponent