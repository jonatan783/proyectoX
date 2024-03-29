import { useSelector } from 'react-redux';
// import CartItems from './CartItemsComponent';
import { CartItemsContainer } from '../../containers';
import '../../components/SingleProduct/SingleProduct.css'
import './CardOrderDetail.css';

const CartDetailsHeaderComponent = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  return shoppingCart.id ? (
    <div className='orderContainer2'>
      <h5 className=''>ShoppingCart</h5>
      <div className=''>
        <div>
          <div>Total Price: $ {shoppingCart.total}</div>
          <div>Order Date: {shoppingCart.updatedAt}</div>
        </div>
      </div>

      <div className='orderContainer2'>
        <CartItemsContainer />
      </div>
    </div>
  ) : null;
};

export default CartDetailsHeaderComponent;
