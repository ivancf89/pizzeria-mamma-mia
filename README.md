# 🍕 Hito 5 - Pizzería Mamma Mía

¡Hola! 👋  
Este es el **Hito 5** de mi proyecto en React: **Pizzería Mamma Mía**.  
En este hito implementé el enrutamiento con `react-router-dom` para que la app funcione como una **SPA (Single Page Application)**.

---

## 🚀 ¿Qué hice?

- ✅ Instalé y configuré `react-router-dom`.
- ✅ Moví los componentes principales a una carpeta `pages/`.
- ✅ Creé rutas para:
  - `/` → Home
  - `/login` → Login
  - `/register` → Register
  - `/cart` → Carrito
  - `/pizza/p001` → Detalle de una pizza
  - `/profile` → Perfil del usuario
  - `/*` → Página 404 (NotFound)
- ✅ Implementé un `Navbar` con `Link` para navegar sin recargar.
- ✅ El botón del carrito redirige a `/cart` (por ahora no guarda pizzas, eso viene después 👀).

---

## 📁 Estructura del proyecto
src/
├── pages/ ← Aquí van las "vistas"
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Cart.jsx
│ ├── Pizza.jsx
│ ├── Profile.jsx
│ └── NotFound.jsx
├── components/ ← Componentes reutilizables
│ ├── Navbar.jsx
│ ├── CardPizza.jsx
│ ├── Footer.jsx
│ └── Header.jsx
├── App.jsx ← Con BrowserRouter y Routes
└── ...


---

## 🔌 Backend necesario (¡ojo!)

Este hito **depende del backend** que nos dieron en clase.  
Para que todo funcione, necesitas:

1. Descargar el backend: `simple-api-backend-nodejs-express-fs-json-jwt-main`
2. Levantarlo en otra terminal:
   ```bash
   npm install
   npm start
   → Corre en http://localhost:5000

Luego inicia el frontend:
bash


1
npm run dev
→ Se abre en http://localhost:5173
🧪 ¿Cómo probarlo?
Abre http://localhost:5173
Navega por el Navbar: /login, /register, /profile, etc.
Prueba una ruta inválida (como /hola) → debe aparecer NotFound.jsx.
En /pizza/p001 se muestra el detalle de una pizza desde la API.
El carrito aún no guarda pizzas (eso es para el Hito 6 😉).
📝 Notas
El carrito no persiste porque aún no usamos Context. Eso viene en el próximo hito.
El email y botón de logout en Profile son estáticos (como pide el enunciado).
No vi la tutoría porque con la clase y el enunciado me alcanzó. 😎
🙌 ¡Gracias!
Este hito me ayudó a entender bien cómo funciona el enrutamiento en React.
Próximo paso: Hito 6 - Context. Ahí haré que el carrito funcione de verdad.

¡Hasta la próxima! 🍕🚀

— Ivs
