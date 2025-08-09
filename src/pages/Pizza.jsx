// src/pages/Pizza.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importa el contexto-- CHEEECK

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext); //  Usa el contexto

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Pizza no encontrada');
        return res.json();
      })
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error al cargar la pizza:', error));
  }, [id]);

  if (!pizza) {
    return <div className="container mt-4">Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <p>{pizza.description}</p>
          {/* Botón conectado al carrito */}
          <button
            className="btn btn-primary"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;