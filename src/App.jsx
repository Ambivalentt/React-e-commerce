import { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Promotions from './components/Promotions/Promotions';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ProductsNavbar from './components/Product/Product';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/*' element={<ProductsNavbar />} />
          <Route path='/promotions' element={<Promotions />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
