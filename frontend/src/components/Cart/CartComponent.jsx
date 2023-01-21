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
    container: {
      height: 110
    },
    orders: {
      display: 'flex',
      /* border: '1px solid blue', */
      width: '100%',
      height: 100,
      backgroundColor: 'white',
/*       borderRadius: 8, */
      marginBottom: 5,
      borderTopRightRadius: 0, 
      borderBottomRightRadius: 0
      /* flexDirection: 'column' */
    },
    containerImg: {
      width: 100,
      height: 100,
    },
    img: {
      width: 80,
      height: '100%',
      // objectRit: 'contain',
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
      <div className='containerSidebar row' style={{ height: '80%', overflow: 'scroll'}}>
        <div className='titleCart col-8 ' style={{ width: '62%', marginLeft: 15, paddingRight: 0, height: 400}}>Productos
          <div>
            { searchOrder.data.map((order, i) => <div key={i} ><ListOrdersContainer order={order} styles={styles}/></div> )}
          </div>
        </div>

        <div className='titleCart col-2 '  style={{padding: 0, }}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Unidades</div>
          {searchOrder?.data?.map((order, i) => 
          <div className="containerDropdawn" key={i} style={{ height: 110, }}>
            <div className="containerDropdawn1" style={{ height: 100, }}>
              <div style={{display: 'flex',  marginTop: 20,  height: 35, justifyContent: 'space-evenly', alignItems: 'center', width: '90%', borderRadius: 5, backgroundColor: '#60c453'}}>
                <div className='titleDropdawn' style={{ color: 'white', fontFamily: 'CircularXX Light', fontSize: 15, letterSpacing: 0, textTransform: 'capitalize', height: 25}}>1 unidad</div>
                <div style={{height: 25}}><DropdawnContainer options={convertNumToArray(order?.stock)} optionClick={'fnOrderByPagesSelected'}/></div>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className='titleCart col-2' style={{padding: 0,}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Subtotal</div>
          {searchOrder?.data?.map((order, i) => 
            <div className="containerDropdawn" key={i} style={{ height: 110,}}>
              <div className="containerDropdawn1" style={{ height: 100, borderTopRightRadius: 8, borderBottomRightRadius: 8}}>
                <div style={{display: 'flex',  marginTop: 20, height: 35, justifyContent: 'space-evenly', alignItems: 'center', width: '90%', borderRadius: 5, fontFamily: 'CircularXX Light', fontSize: 15, letterSpacing: 0, textTransform: 'capitalize', }}>{`ARG ${order.price},00`}
                </div>
              </div>
            </div>
          )} 
        </div>
      </div>
      <div className='row' style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, height: '10%',}}>
          <div className='titleCart col-10 ' style={{ fontSize: 18, fontFamily: 'CircularXX Light', letterSpacing: 0, textTransform: 'capitalize', alignItems: 'center', display: 'flex'}}>Total a pagar</div>
          <div className='titleCart col-2 ' style={{textAlign: 'start', fontSize: 18, fontFamily: 'CircularXX Light', letterSpacing: 0, textTransform: 'capitalize', alignItems: 'center', display: 'flex'}}>
            {`$ ${'12123123'}`}
          </div>
          <div className='col-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button style={{backgroundColor: '#60c453', color: 'white', width: '100%', height: 38, borderRadius: 8, border: 0, marginBottom: 5}} onClick={handleOnCheckout}>Comprar</button>
          </div>
      </div>
    </>
  );
};

export default CartComponent;
