// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza'; // ← Nuevo
// import Home from './components/Home'; // ← Comentado
// import Login from './components/Login';
// import Register from './components/Register';
// import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Pizza />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;