import React, { useState } from 'react';

const Login = () => {
  // Estados para cada campo del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario
    if (!email.trim() || !password.trim()) {
      setError(true); // Si algún campo está vacío, mostrar error
    } else {
      setError(false); // Si todos los campos están llenos, continuar
      console.log('Iniciando sesión con:', { email, password });
      // Aquí puedes agregar código para enviar los datos a un servidor más adelante
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>Email y password son obligatorios</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;