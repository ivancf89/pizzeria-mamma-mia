import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  // Cargar pizzas desde JSON
  useEffect(() => {
    fetch('/pizza.json')
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error al cargar las pizzas:', error));
  }, []);

  // Añadir pizza al carrito
  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const updated = [...cart];
      updated[index].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  // Aumentar cantidad
  const increase = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
  };

  // Disminuir cantidad (y eliminar con splice si llega a 0)
  const decrease = (index) => {
    const updated = [...cart];
    updated[index].quantity -= 1;
    if (updated[index].quantity === 0) {
      updated.splice(index, 1);
    }
    setCart(updated);
  };

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container mt-4">
        {/* Tarjetas de pizzas */}
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAdd={addToCart}
              />
            </div>
          ))}
        </div>

        {/* Carrito de compras */}
        <div className="mt-5">
          <h3>🛒 Carrito de Compras</h3>
          {cart.length === 0 ? (
            <p>No hay pizzas en el carrito.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Pizza</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt={item.name} width={60} />
                      </td>
                      <td className="text-capitalize">{item.name}</td>
                      <td>${item.price.toLocaleString('es-CL')}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.price * item.quantity).toLocaleString('es-CL')}</td>
                      <td>
                        <button onClick={() => decrease(index)} className="btn btn-sm btn-danger mx-1">-</button>
                        <button onClick={() => increase(index)} className="btn btn-sm btn-success mx-1">+</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4>Total a pagar: <span className="text-success">${total.toLocaleString('es-CL')}</span></h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
