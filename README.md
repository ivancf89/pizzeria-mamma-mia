# 🛒 Hito 6 - Pizzería Mamma Mía

¡Hola! 👋  
Este es el **Hito 6**: implementé el **Context API** para que el carrito funcione de verdad.

---

## 🧠 ¿Qué hice?

- ✅ Creé `CartContext.jsx` para manejar el estado del carrito.
- ✅ Usé `useContext` en `Home` y `Cart` para compartir el carrito.
- ✅ Ahora puedes:
  - Añadir pizzas desde `Home`.
  - Verlas en `/cart`.
  - Aumentar, disminuir y limpiar el carrito.

---

## 🔄 Flujo del carrito

1. Hago clic en "Añadir al carrito" → llama a `addToCart(pizza)`.
2. El carrito se actualiza gracias al `CartProvider`.
3. Al ir a `/cart`, el componente consume el mismo contexto y muestra las pizzas.

---

## ⚙️ Estructura clave
src/
├── context/
│ └── CartContext.jsx
├── pages/
│ ├── Home.jsx → usa addToCart
│ └── Cart.jsx → muestra cart, increase, decrease
└── App.jsx → envuelve todo con <CartProvider>

¡Hasta la próxima! 🍕

— Ivs
