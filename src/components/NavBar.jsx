import React from 'react';
import CartWidget from './CartWidget.jsx';
import logo from '../assets/logo.png';  // importa la imagen

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="Logo Tienda" width="120" height="40" />
        </a>
        {/* resto del nav */}
        {/* ... */}
      </div>
    </nav>
  );
};

export default NavBar;