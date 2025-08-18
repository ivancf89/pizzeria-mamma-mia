// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al registrar');
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);
      setSuccess(true);
      setError('');
      setTimeout(() => navigate('/login'), 1500); // Redirige al login
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registrarse</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">¡Registro exitoso! Redirigiendo...</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="ivan@hola.com"
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="ivan123"
            required
          />
        </div>
        <div className="mb-3">
          <label>Confirmar contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;