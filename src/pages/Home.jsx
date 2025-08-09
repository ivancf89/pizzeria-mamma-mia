// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { Link } from 'react-router-dom'; // ✅ Importa Link aquí
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al cargar las pizzas:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              {/* Envuelve solo la imagen y el título con Link */}
              <Link 
                to={`/pizza/${pizza.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card" style={{ width: '18rem' }}>
                  <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizza.name}</h5>
                    <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
                  </div>
                </div>
              </Link>
              
              {/* El botón "Añadir al carrito" sigue fuera del Link */}
              <div className="card-footer">
                <button 
                  className="btn btn-primary w-100"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;