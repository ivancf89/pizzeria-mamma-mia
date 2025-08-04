// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increase, decrease, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - ${item.price.toLocaleString('es-CL')} x {item.quantity}
                </div>
                <div>
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => decrease(item.id)}>-</button>
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => increase(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3"><strong>Total: ${total.toLocaleString('es-CL')}</strong></p>
          <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;