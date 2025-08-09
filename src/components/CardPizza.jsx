// Opcional: src/components/CardPizza.jsx (jiji simplificada)
import React from 'react';

const CardPizza = ({ id, name, price, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
      </div>
    </div>
  );
};

export default CardPizza;