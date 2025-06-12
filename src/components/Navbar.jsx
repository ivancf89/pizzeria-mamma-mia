import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
        <div className="navbar-nav">
          <a className="nav-link" href="#">Home</a>
          {token ? (
            <>
              <a className="nav-link" href="#">Profile</a>
              <a className="nav-link" href="#">Logout</a>
            </>
          ) : (
            <>
              <a className="nav-link" href="#">Login</a>
              <a className="nav-link" href="#">Register</a>
            </>
          )}
          <span className="nav-link">Total: ${total}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
