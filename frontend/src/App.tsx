import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import AdminDashBoard from './admin/pages/AdminDashboard/AdminDashboard';
import { fetchProduct } from './State/fetchProduct';


function App() {

useEffect(() => {
  fetchProduct()
},[])
  return (
    
     
      <ThemeProvider theme={customeTheme}>

        <div>
           
           {/*<Home/>*/}
           {/*<Product/>*/}
            {/*<ProductDetails/>*/}
            {/*<Review/>*/}
            {/*<Cart/>*/}
            {/*<Checkout/>*/}
            {/* <Account/> */}
            <Navbar/>
            <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/products/:category' element={<Product/>}/>
              <Route path='/reviews/:productId' element={<Review/>}/>
              <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/become-seller' element={<BecomeSeller/>}/>
              <Route path='/account/*' element={<Account/>}/>
              <Route path='/seller/*' element={<SellerDashboard/>}/>
              <Route path='/admin/*' element={<AdminDashBoard/>}/>

            </Routes>

        </div>
      </ThemeProvider>
    
     

  
  );
}

export default App;
