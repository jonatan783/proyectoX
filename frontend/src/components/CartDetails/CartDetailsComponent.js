/* import FakeOrders from '../utils/FakeOrders.js'; */
import CartDetailsHeader from '../../commons/preOrder/CartDetailsHeader'
import {useSelector } from 'react-redux';
/* import '../OrderDetail/OrderHistorial.css' */

const CartDetailsComponent = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  return shoppingCart.id ? (
    <div className='orderContainer4'>
      <CartDetailsHeader />
    </div>
  ) : null;
};

export default CartDetailsComponent;
