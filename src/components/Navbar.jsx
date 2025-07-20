import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const total = 25000; // valor temporal
  const token = false; // valor temporal

  const formatCurrency = (value) => value.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {token ? (
            <>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
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
