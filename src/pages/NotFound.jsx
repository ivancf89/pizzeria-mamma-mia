// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mt-4 text-center">
      <h1>404 - Página no encontrada uwu</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Si vas a inicio te llegarán las mejores pizzas.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;