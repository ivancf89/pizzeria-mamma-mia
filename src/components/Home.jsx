// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar las pizzas');
        return res.json();
      })
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error al consumir la API:', error));
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
                onAdd={() => {}} // sin funcionalidad aún
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;