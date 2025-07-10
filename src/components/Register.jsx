import React, { useState } from 'react';

const Register = () => {
  // Estados para cada campo del formulario
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError(true); // Si algún campo está vacío, mostrar error
    } else {
      setError(false); // Si todos los campos están llenos, continuar
      console.log('Registrando usuario:', { username, email, password });
      // Aquí puedes agregar código para enviar los datos a un servidor más adelante
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>Todos los campos son obligatorios</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;