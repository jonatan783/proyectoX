import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import {
  CartDetailsContainer,
  FilterSearchContainer,
  FooterContainer,
  NotFoundContainer,
  OrderDetailContainer,
  OrderHistorialContainer,
  SingleProductContainer,
  FormModalContainer,
  UserProfileContainer
} from './containers';
import {
  NavbarView,
  HomeView,
  OrdersView,
} from './views';
import { persistUser } from './redux/user';
import { getShoppingCart } from './redux/shoppingCart';
import { getItemCart } from './redux/itemCart';


function App() {
  const [products, setProducts] = useState([]);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(persistUser());
  }, []);

  return (
    <div className='App' id='app'>
      <NavbarView />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path='/products/popular' element={<FilterSearchContainer products={products} />} />
        <Route path='/orders/history' element={<OrderHistorialContainer />} />
        <Route path='/CartDetails' element={<CartDetailsContainer />} />
        <Route path='/orderDetails/:id' element={<OrderDetailContainer />} />
        <Route path='/product/:id' element={<SingleProductContainer />} />

        <Route path='/profile' element={<UserProfileContainer />} />
        {/* user.roleId === 2 */ true? (
          <>
            {/* <Route path='/admin/products/new-product' element={<NewProductFormContainer />} /> */}
            {/* <Route path='/admin/categories/new-category' element={<NewCategFormContainer />} /> */}
          </>
        ) : null}
        <Route path='/search/:search/category/:category/priceRange/:priceRange/limitPage/:limitPage/orderKey/:orderKey/page/:page' element={<OrdersView />} />
        <Route path='/*' element={<NotFoundContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;



