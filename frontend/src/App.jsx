// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import {
  AdminCategories,
  AdminOrders,
  AdminProducts,
  AdminUsers,
  CarouselComponent,
  CartDetails,
  EditCategForm,
  EditProductForm,
  FilterSearch,
  Footer,
  Grid,
  Navbar,
  NewCategForm,
  NewProductForm,
  NotFound,
  OrderDetails,
  OrderHistorial,
  SingleProduct
} from './components';
//import { persistUser } from './redux/user';
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
    <div className='App'>
      <Navbar setProducts={setProducts} />
      {/* <div className="container"> */}
      <Routes>
        <Route path='/' element={
          <>
            <CarouselComponent />
            <div className='container'><Grid products={products} /></div>
          </>
        }
        />
        <Route path='/products/popular' element={<FilterSearch products={products} />} />
        <Route path='/orders/history' element={<OrderHistorial />} />
        <Route path='/CartDetails' element={<CartDetails />} />
        <Route path='/orderDetails/:id' element={<OrderDetails />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        {user.roleId === 2 ? (
          <>
            <Route path='/admin/users' element={<AdminUsers />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route path='/admin/products/new-product' element={<NewProductForm />} />
            <Route path='/admin/products/edit/:id' element={<EditProductForm />} />
            <Route path='/admin/categories' element={<AdminCategories />} />
            <Route path='/admin/categories/new-category' element={<NewCategForm />} />
            <Route path='/admin/categories/edit/:id' element={<EditCategForm />} />
          </>
        ) : null}
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;