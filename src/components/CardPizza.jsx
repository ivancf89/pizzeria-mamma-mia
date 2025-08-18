// src/components/CardPizza.jsx
import React from 'react';

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card h-100" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul className="flex-grow-1">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        {/* ✅ Botón de añadir al carrito */}
        <button
          className="btn btn-primary mt-3"
          onClick={() => onAdd({ id, name, price, img })}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;