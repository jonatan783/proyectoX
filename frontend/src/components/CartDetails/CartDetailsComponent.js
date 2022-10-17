/* import FakeOrders from '../utils/FakeOrders.js'; */
import { CartDetailsHeaderContainer } from '../../containers';
import {useSelector } from 'react-redux';
/* import '../OrderDetail/OrderHistorial.css' */

const CartDetailsComponent = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  return shoppingCart.id ? (
    <div className='orderContainer4'>
      <CartDetailsHeaderContainer />
    </div>
  ) : null;
};

export default CartDetailsComponent;
