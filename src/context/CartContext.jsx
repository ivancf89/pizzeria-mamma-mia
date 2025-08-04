// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === pizza.id);
      if (exists) {
        return prev.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  const increase = (id) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(prev => {
      const item = prev.find(item => item.id === id);
      if (item.quantity === 1) {
        return prev.filter(item => item.id !== id);
      }
      return prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
