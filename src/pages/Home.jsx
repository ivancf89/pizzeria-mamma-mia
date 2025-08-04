// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext); // ✅ Usando el contexto

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
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAdd={() => addToCart(pizza)} // ✅ Llama a la función del contexto
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;