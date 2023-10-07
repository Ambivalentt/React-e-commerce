import { useEffect, useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/Context/ThemeProvider';
import AuthProvider from './components/Context/AuthProvider';
import Home from './components/Home/Home';
import Promotions from './components/Promotions/Promotions';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ProductsNavbar from './components/Product/Product';
import { CartProvider } from './components/Context/CartProvider';
import PageNotFound from './Layouts/PageNotFound';

// import {uploadProducts} from './components/Firebase/bulkProducts'


function App() {
  //Subir products a firebase
  // useEffect(()=>{
  //   uploadProducts()
  // },[])
  

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/*' element={<ProductsNavbar />} />
              <Route path='/promotions' element={<Promotions />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<PageNotFound/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>

  )
}

export default App
