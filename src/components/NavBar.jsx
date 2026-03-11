import React from 'react';
import CartWidget from './CartWidget.jsx';
import logo from '../assets/logo.png';  // Ruta a tu logo, cambia según donde esté

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-4">
        {/* Logo con imagen */}
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="Logo Tienda" width="120" height="40" />
        </a>

        {/* Botón hamburguesa para responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>

          {/* Widget carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;