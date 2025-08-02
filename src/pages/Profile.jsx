// src/pages/Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="container mt-4">
      <h2>Perfil del Usuario</h2>
      <p><strong>Email:</strong> usuario@ejemplo.com</p>
      <button className="btn btn-danger">
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Cerrar sesión
        </Link>
      </button>
    </div>
  );
};

export default Profile;