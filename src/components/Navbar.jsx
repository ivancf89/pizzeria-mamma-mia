// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formatCurrency = (value) => value.toLocaleString('es-CL');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {!token ? (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          ) : (
            <Link className="nav-link" to="/profile">Profile</Link>
          )}
          <Link className="nav-link" to="/cart">🛒 Carrito</Link>
          <span className="nav-link">Total: ${formatCurrency(total)}</span>
          {token && (
            <Link
              className="nav-link"
              to="/login"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;