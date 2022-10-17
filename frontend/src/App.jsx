// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { 
  AdminCategoriesContainer,
  AdminOrdersContainer,
  AdminProductsContainer,
  AdminUserContainer,
  CarouselContainer,
  CartDetailsContainer,
  EditCategFormContainer,
  EditProductFormContainer,
  FilterSearchContainer,
  FooterContainer,
  GridContainer,
  NavbarContainer,
  NewCategFormContainer,
  NewProductFormContainer,
  NotFoundContainer,
  OrderDetailContainer,
  OrderHistorialContainer,
  SingleProductContainer,
} from './containers';
import { persistUser } from './redux/user';
import { getShoppingCart } from './redux/shoppingCart';
import { getItemCart } from './redux/itemCart';
import { getProducts } from './requests/requests';


function App() {
  const [products, setProducts] = useState([]);
  console.log(products)
  // const user = useSelector(state => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(persistUser());
  // }, []);

  // useEffect(() => {
  //   dispatch(getShoppingCart()).then(() => dispatch(getItemCart()));
  // }, [user.id]);


  useEffect(() => {
    getProducts()
    .then(res => {
      console.log('hola ---> ', res.data)
      setProducts(res.data)});
  }, []);

  return (
    <div className='App'>
        {/* <NavbarContainer setProducts={setProducts}/> */}
        {/* <div className="container"> */}
        <Routes>
        <Route path='/' element={
            <>
              <CarouselContainer />
              <div className='container'><GridContainer products={products}/></div>
            </>
          }
        />
        {/* <Route path='/products/popular' element={<FilterSearchContainer products={products}/>} />
        <Route path='/orders/history' element={<OrderHistorialContainer />} />
        <Route path='/CartDetails' element={<CartDetailsContainer />} />
        <Route path='/orderDetails/:id' element={<OrderDetailContainer />} />
        <Route path='/product/:id' element={<SingleProductContainer />} /> */}
        {/* {user.roleId === 2 ? (
          <>
            <Route path='/admin/users' element={<AdminUserContainer />} />
            <Route path='/admin/orders' element={<AdminOrdersContainer />} />
            <Route path='/admin/products' element={<AdminProductsContainer />} />
            <Route path='/admin/products/new-product' element={<NewProductFormContainer />}/>
            <Route path='/admin/products/edit/:id' element={<EditProductFormContainer />}/>
            <Route path='/admin/categories' element={<AdminCategoriesContainer/>}/>
            <Route path='/admin/categories/new-category' element={<NewCategFormContainer />}/>
            <Route path='/admin/categories/edit/:id' element={<EditCategFormContainer />}/>
          </>
        ) : null} */}
        {/* <Route path='/*' element={<NotFoundContainer />} /> */}
        </Routes>
        {/* </div> */}
        <FooterContainer />
    </div>
  );
}

export default App;