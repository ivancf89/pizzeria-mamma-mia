import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text"><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
        <button className="btn btn-primary" onClick={() => onAdd({ id, name, price, img })}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
