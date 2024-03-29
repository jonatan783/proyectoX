import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOrdenDetailById } from '../../requests/orderRequest';
import { OrderItemsContainer } from '../../containers';
import '../CartDetailsHeader/CardOrderDetail.css'
import '../../components/SingleProduct/SingleProduct.css'
/* import '../SingleProduct.css'; */

const OrderDetailsHeaderComponent = () => {
  
  const { id } = useParams();

  const user = useSelector(state => state.user);

  const [order, setOrder] = useState({});

  useEffect(() => {
    getOrdenDetailById(id)
    .then(res => setOrder(res.data));
  }, []);

  return order ? (
    <div className='orderContainer2'>
      <h5 className=''>Order ID : {order.id}</h5>

      <div className=''>
        <div>
          <div>Total Price: $ {parseInt(order.total).toFixed(2)}</div>
          <div>Order Date: {order.createdAt}</div>
        </div>
      </div>
      <div className='orderContainer2'>
        <OrderItemsContainer/>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OrderDetailsHeaderComponent;
