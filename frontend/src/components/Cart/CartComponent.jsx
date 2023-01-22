import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ListOrdersContainer, DropdawnContainer } from '../../containers';
import { addOrCreateItemCart, deleteItemCart } from '../../redux/itemCart';
import { convertNumToArray } from '../../utils/functions';
import './cart.css'

const CartComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [arrayNumber, setArrayNumber] = useState([])

  const cartItems = useSelector(state => state.itemCarts.data);
  const searchOrder = useSelector(state => state.searchOrder)
  console.log(searchOrder.data)

  useEffect(() => {
    /* console.log(cartItems, 'background: #222; color: #bada55'); */
    setItems(cartItems)
  } , [cartItems]);

  /* function convertNumToArray(number) {
    const array = []
    for (let i = 1; i <= number; i++) {
        array.push(i);
    }
    setArrayNumber(array)
  } */

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
    container: {
      height: 110
    },
    orders: {
      display: 'flex',
      width: '100%',
      height: 100,
      backgroundColor: 'white',
      marginBottom: 5,
      borderTopRightRadius: 0, 
      borderBottomRightRadius: 0
    },
    containerImg: {
      width: 100,
      height: 100,
    },
    img: {
      width: 80,
      height: '100%',
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
    },
    dropdown: {
      color: 'white'
    }
  }

  function saludo(n) {
    return n
  }
  
  return (
    <>
      <div className='containerSidebar row'>
        <div className='col-8 containerOrder title1'>Productos
          <div>
            { searchOrder.data.map((order, i) => <div key={i} ><ListOrdersContainer order={order} styles={styles} visableDelete={true}/></div> )}
          </div>
        </div>

        <div className='col-2 '  style={{padding: 0 }}>
          <div className='container1 title1'>Unidades</div>
          {searchOrder?.data?.map((order, i) => 
          <div className="containerDropdawn" key={i}>
            <div className="containerDropdawn1">
              <div className='container2' style={{ backgroundColor: '#60c453'}}>
                <div className='titleDropdawn title3' style={{ color: 'white', height: 25}}>1 unidad</div>
                <div style={{height: 25}}><DropdawnContainer options={convertNumToArray(order?.stock)} optionClick={saludo()} styles={styles}/></div>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className='col-2' style={{padding: 0,}}>
          <div className='container1 title1'>Subtotal</div>
          {searchOrder?.data?.map((order, i) => 
            <div className="containerDropdawn" key={i}>
              <div className="containerDropdawn1" style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8}}>
                <div className='container2 title3'>{`ARG ${order.price},00`}
                </div>
              </div>
            </div>
          )} 
        </div>
      </div>
      <div className='row containerPay'>
          <div className='col-10 title2 container3'>Total a pagar</div>
          <div className='col-2 title2 container3'>
            {`$ ${'12123123'}`}
          </div>
          <div className='col-12 container1'>
            <button className='buttonPay' onClick={handleOnCheckout}>Comprar</button>
          </div>
      </div>
    </>
  );
};

export default CartComponent;
