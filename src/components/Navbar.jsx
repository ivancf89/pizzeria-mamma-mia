// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000; // temporal
  const token = false; // temporal

  const formatCurrency = (value) => value.toLocaleString('es-CL');

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
            <>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/login">Logout</Link>
            </>
          )}
          <Link className="nav-link" to="/cart">🛒 Carrito</Link>
          <span className="nav-link">Total: ${formatCurrency(total)}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
