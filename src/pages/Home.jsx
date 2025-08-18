// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <div className="col" key={pizza.id}>
              {/* 🔗 Solo la imagen y el título son clickeables */}
              <div className="card h-100" style={{ width: '18rem' }}>
                <Link
                  to={`/pizza/${pizza.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizza.name}</h5>
                    <p><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
                  </div>
                </Link>

                {/* ✅ El botón "Añadir al carrito" está fuera del Link */}
                <div className="card-footer">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => addToCart(pizza)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;