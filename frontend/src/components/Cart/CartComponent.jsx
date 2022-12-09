import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ListOrdersContainer } from '../../containers';
import { addOrCreateItemCart, deleteItemCart } from '../../redux/itemCart';
import './cart.css'

const CartComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const cartItems = useSelector(state => state.itemCarts.data);
  const searchOrder = useSelector(state => state.searchOrder)
  console.log(searchOrder.data)

  useEffect(() => {
    /* console.log(cartItems, 'background: #222; color: #bada55'); */
    setItems(cartItems)
  } , [cartItems]);


  const suma = (product, quantity, ShoppingCartId) => {
    if (quantity >= product.stock) return;
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId,
        productId: product.id,
        quantity: quantity + 1,
      })
    );
  };
  const resta = (product, quantity, ShoppingCartId) => {
    if (quantity <= 1) return;
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId,
        productId: product.id,
        quantity: quantity - 1,
      })
    );
  };

  const handleDelete = id => {
    dispatch(deleteItemCart(id));
  };

  const handleOnCheckout = () => {
    navigate('./CartDetails');
  };

  const styles = {
    orders: {
      display: 'flex',
      /* border: '1px solid blue', */
      width: 470,
      height: 100,
      backgroundColor: 'white',
      borderRadius: 8,
      marginBottom: 5,
    },
    containerImg: {
      height: 100,
      width: 100,
      padding: 5,
      boxSizing: 'borderBox',
    },
    img: {
      width: '100%',
      height: '100%',
      objectRit: 'contain',
      borderRadius: 4,
    },
    title: {
      margin: '15px 0 5px',
      color: '#063312e9',
      fontFamily: 'CircularXX Light',
      fontSize: 15,
      letterSpacing: 0,
      lineHeight: 25,
      textTransform: 'capitalize',
    },
    price: {
      color: '#063312e9',
      fontFamily: 'Rubik',
      fontSize: 15,
      fontWeight: 100,
    } 
  }


  return (
    <>
      <div className='containerSidebar row' style={{/* backgroundColor: 'red' */}}>
        {/* <div> */}
          <div className='titleCart col-8 ' style={{/* border: '1px solid blue', */ marginLeft: 30, marginRight: -30}}>Productos
            <div><ListOrdersContainer orders={searchOrder.data} payload={searchOrder.loading} styles={styles}/></div>
          </div>
          <div className='titleCart col-2 '>Unidades
            <div style={styles.orders}></div>
          </div>
          <div className='titleCart col-2 '>Subtotal
    
              {searchOrder?.data.map((dat, index) => 
                <div style={styles.orders}>{`ARG ${dat.price},00`}</div>
              )}
       
          </div>
          {/* <>
            {items?.map(({ id, quantity, product, ShoppingCartId }, i) => {
              return (
                <div key={id} className='containerCart'>
                  <div className='itemImg'>
                    <ion-icon name='leaf-outline'></ion-icon>
                  </div>
                  <div className='subContainerCart'>
                    <div>
                      <li className='dataItem'>{product.name}</li>
                      <li className='dataItem'>${product.price}</li>
                      <li className='quantityItem'>
                        <button
                          type='button'
                          className='buttonQuantity'
                          onClick={() =>
                            resta(product, quantity, ShoppingCartId)
                          }
                        >
                          -
                        </button>
                        <p className='quantity'>{quantity}</p>
                        <button
                          type='button'
                          class='buttonQuantity'
                          onClick={() =>
                            suma(product, quantity, ShoppingCartId)
                          }
                        >
                          +
                        </button>
                      </li>
                      {quantity === product.stock ? (
                        <li className='err'>sin stock</li>
                      ) : null}
                    </div>
                    <div className='subtotal'>
                      <li className='dataItem'>${product.price * quantity}</li>
                      <div className='trashIcon' onClick={() => handleDelete(id)}>
                        <ion-icon name='trash-outline'></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </> */}
       {/*  </div> */}
        {/* <div>
          <div className='containerTotal'>
            <span className='titleTotal'>Total a pagar</span>
            <span className='titleTotal'>
              $
              {items
                .map(({ quantity, product }) => quantity * product.price)
                .reduce((total, i) => total + i, 0)}
            </span>
          </div>
          <div className='subPrice'>
            <div>
              O hasta 6 cuotas sin interes de{' '}
              {(
                items
                  .map(({ quantity, product }) => quantity * product.price)
                  .reduce((total, i) => total + i, 0) / 6
              ).toFixed(2)}
            </div>
            <button
              className='buttonQuantity starting'
              onClick={handleOnCheckout}
            >
              Iniciar compra
            </button>
          </div>
        </div> */}
      </div>
      {/* <ListOrdersContainer orders={searchOrder.data} payload={searchOrder.loading}/> */}
    </>
  );
};

export default CartComponent;
