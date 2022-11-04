// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import {
  CartDetailsContainer,
  FilterSearchContainer,
  FooterContainer,
  NewCategFormContainer,
  NewProductFormContainer,
  NotFoundContainer,
  OrderDetailContainer,
  OrderHistorialContainer,
  SingleProductContainer,
  FormModalContainer
} from './containers';
import {
  Navbar,
  Home,
} from './views';
import { persistUser } from './redux/user';
import { getShoppingCart } from './redux/shoppingCart';
import { getItemCart } from './redux/itemCart';
import { getProductAll } from './requests/productRequest';


function App() {
  const [products, setProducts] = useState([]);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(persistUser());
  }, []);

  useEffect(() => {//proyectoX, agregado del if por errores de itemcart
    if (user.id) {
      dispatch(getShoppingCart(user.id))
        .then(() => dispatch(getItemCart()));
    }
  }, [user.id]);


  useEffect(() => {
    getProductAll()
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className='App' id='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/popular' element={<FilterSearchContainer products={products} />} />
        <Route path='/orders/history' element={<OrderHistorialContainer />} />
        <Route path='/CartDetails' element={<CartDetailsContainer />} />
        <Route path='/orderDetails/:id' element={<OrderDetailContainer />} />
        <Route path='/product/:id' element={<SingleProductContainer />} />
        {user.roleId === 2 ? (
          <>
            <Route path='/admin/products/new-product' element={<NewProductFormContainer />} />
            <Route path='/admin/categories/new-category' element={<NewCategFormContainer />} />
          </>
        ) : null}
        <Route path='/*' element={<NotFoundContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;



