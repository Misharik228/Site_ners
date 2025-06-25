import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import styled from 'styled-components';
import { CartProvider } from './components/CartContext';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #fc575e;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #f7b42c;
  }
`;

function App() {
  return (
    <CartProvider>
      <Router>
        <Nav>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/cart">Корзина</NavLink>
          <NavLink to="/about">О нас</NavLink>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
