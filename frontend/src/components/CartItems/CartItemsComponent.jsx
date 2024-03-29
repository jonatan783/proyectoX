import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { persistUser } from '../../redux/user';
import { getShoppingCart } from '../../redux/shoppingCart';
import { getItemCart } from '../../redux/itemCart';
import { createOrderDetail, deleteItemCartById, deleteShoppingCartById } from '../../requests/requests';
import '../../components/OrderHistorial/OrderHistorial.css'

const CartItemsComponent = ({ id }) => {
  const shoppingCart = useSelector(state => state.shoppingCart);
  const cartItems = useSelector(state => state.itemCarts);
  const user = useSelector(state => state.user);

  console.log(cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleOnBuy = () => {
   /*  axios
      .post(`/api/orderDetail/createOrderDetail`, {
        UserId: user.id,
        total: shoppingCart.total,
      }) */
      createOrderDetail(user.id, shoppingCart.total)
      .then(order => {
        Promise.all(
          cartItems.map(item => {
            axios.post(`/api/orderItem/add`, {
              price: item.product.price,
              quantity: item.quantity,
              productId: item.productId,
              orderdetailId: order.data.id,
            });
          })
        );
        Promise.all(
          cartItems.map(item => {
          /*   axios.delete(`/api/itemCart/remove/${item.id}`); */
            deleteItemCartById(item.id)
          })
        )
          .then(() => {
           /*  axios.delete(`/api/shoppingCart/${shoppingCart.id}`); */
           deleteShoppingCartById(shoppingCart.id)
          })
          .then(() => dispatch(getShoppingCart()))
          .then(() => dispatch(getItemCart()));
        navigate(`/orderDetails/${order.data.id}`);
      });
  };

  return cartItems ? (
    <div className=''>
      <Table bordered hover>
        <tbody>
          <div class=''>
            {cartItems.map((item, i) => (
              <div className='orderContainer3'>
                <div className=''>
                  <img
                    class='order-card-img'
                    alt=''
                    src={item.product.img[0]}
                  />
                  <Link to={`/product/${item.productId}`}>
                    {item.product.name}
                  </Link>
                </div>
                <div className='orderContainer2'>
                  <div>Qty: {item.quantity}</div>
                  <div>Unit Price: $ {item.product.price}</div>
                  <div>
                    Price: ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </tbody>
      </Table>
      <button className="buttonComment buttonn" onClick={handleOnBuy}>Continue</button>
    </div>
  ) : null;
};
export default CartItemsComponent;
