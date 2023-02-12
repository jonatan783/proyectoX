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
      <div className='row'>
        <div className='col-8 title1 containerOrder'>Productos</div>
        <div className='col-2 title1 container1' style={{padding: 0}}>Unidades</div>
        <div className='col-2 title1 container1' style={{padding: 0}}>Subtotal</div>
      </div>
      <div style={{height: '80%', overflowY: 'scroll'}}>
        {searchOrder?.data?.map((cartProduct, index) =>
          <div className='row containerSidebar' key={index}>
            <div className='col-8 containerOrder title1'>
              <ListOrdersContainer order={cartProduct} styles={styles}/>
            </div>

            <div className='col-2 '  style={{padding: 0 }}>
                <div className="containerDropdawn1">
                  {/* startDropdown */}
                  <div className='container2' style={{ backgroundColor: '#60c453'}}>
                    <div className='titleDropdawn title3' style={{ color: 'white', height: 25}}>1 unidad</div>
                    <div style={{height: 25}}><DropdawnContainer options={convertNumToArray(cartProduct?.stock)} optionClick={saludo()} styles={styles}/></div>
                  </div>
                  {/* endDropdown */}
              </div>
            </div>

            <div className='col-2 containerDropdawn2' style={{padding: 0, }}>
              <div className="containerDropdawn1" style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8,}}>
                <div className='container2 title3'>{`ARS ${cartProduct?.price},00`}</div>
              </div>
            </div>
            <button className='buttonDelete' onClick={() => console.log('boorar este elemento')}>
              <svg xmlns="http://www.w3.org/2000/svg" color="gray" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className='row containerPay'  style={{ margin: 0}}>
          <div className='col-8 title2 container3'>Total a pagar</div>
          <div className='col-2 title2 container3' style={{justifyContent: 'flex-end'}}>ARS</div>
          <div className='col-2 title2 container3' style={{justifyContent: 'center'}}>{12123123}</div>
          <div className='col-12 container1'>
            <button className='buttonPay' onClick={handleOnCheckout}>Comprar</button>
          </div>
      </div>
    </>
  );
};

export default CartComponent;
