import React from 'react';
import Cart from '../Cart/CartComponent';
import style from './sidebar.module.scss';

const SidebarComponent = () => {
  return (
    <div className={style.container}>
      <div
        className={style.iconCart}
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
      >
        <ion-icon name='cart-outline'></ion-icon>
      </div>
      <div
        className='offcanvas offcanvas-end cont'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
        style={{/* border: '1px solid red', */ width: '50%', backgroundColor: 'rgb(208, 217, 208)'}}
      >
        <div className='offcanvas-header '>
          <h5 id='offcanvasRightLabel'>CARRITO DE COMPRAS</h5>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <hr /* style={{width: '90%'}} *//>
        <Cart />
      </div>
    </div>
  );
};

export default SidebarComponent
