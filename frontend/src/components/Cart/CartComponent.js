import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addOrCreateItemCart, deleteItemCart } from '../../redux/itemCart';
import '../Sidebar/Sidebar.css'

const CartComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const cartItems = useSelector(state => state.itemCarts.data);

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

  return (
    <>
      <div className='containerSidebar'>
        <div>
          <div className='titleCart'>
            <span>producto</span>
            <span>subtotal</span>
          </div>
          <>
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
          </>
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default CartComponent;
