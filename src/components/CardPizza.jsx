import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price}
        </p>
        <button className="btn btn-primary">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;
