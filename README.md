# 🍕 Pizzería Mamma Mía - Hito 8 Final

¡Hola! 👋  
Este es el **Hito 8 final** de mi proyecto en React: **Pizzería Mamma Mía**.

---

## 🧩 ¿Qué hice?

Después de 8 hitos, **todo funciona**:
- ✅ Consumo de APIs con `fetch` y `useEffect`.
- ✅ React Router I y II: rutas dinámicas (`/pizza/:id`) y protegidas (`/profile`).
- ✅ Context API: carrito global que se actualiza en tiempo real.
- ✅ Autenticación con JWT: login real, token en `localStorage`, perfil del usuario.
- ✅ Diseño responsive: todas las páginas usan todo el ancho y alto.
- ✅ Botón de carrito en el `Navbar` con total sincronizado.

---

## 🔐 Autenticación con JWT

- Usé `POST /api/auth/login` para autenticar.
- Guardé el token en `localStorage`.
- Protegí `/profile` con `PrivateRoute`.
- Cerré sesión eliminando el token.

> 🔑 Credenciales de prueba:
> - Email: `ivan@hola.com`
> - Contraseña: `ivan123`

👉 Puedes registrarte con cualquier email y contraseña.

---

## 🛒 Carrito global

- El carrito se actualiza desde `Home` y desde `Pizza`.
- El total se muestra en el `Navbar`.
- Funciona con `Context`.

---

## 🧠 Cómo probarlo

1. Levanta el backend:
   ```bash
   cd simple-api-backend-nodejs-express-fs-json-jwt-main
   npm start

🚀 Tecnologías usadas
React + Vite
React Router DOM
Context API
JWT (JSON Web Tokens)
Bootstrap

