import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/styles.scss'
import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Education } from './components/education/Education';
import { Cart } from './components/shop/cart/Cart';
import { Shop } from './components/shop/Shop';
import { BtnWsp } from './components/wsp/BtnWsp';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MuestreoVerMas } from './components/shop/MuestreoVerMas';
import { CartProvider } from './components/shop/cart/CartContext';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/shop/:catId' element={<Shop />}></Route>
          <Route path='/detail/:itemId' element={<MuestreoVerMas />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          
          <Route path='*' element={<Navigate to={'/'} />}></Route>
        </Routes>

        

        <BtnWsp />

        <Footer />
      </HashRouter>
    </CartProvider>
  );
}

export default App;


// <Route path='/checkout' element={<Checkout />}></Route> agregar cuadno vincule con firebase