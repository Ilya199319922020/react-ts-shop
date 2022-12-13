import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './componets/Cart/Cart';
import Header from './componets/Header/Header';
import Products from './componets/Products/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/react-ts-shop' element={<Navigate replace to="/products" />} />
        <Route path='/' element={<Header />}>
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
