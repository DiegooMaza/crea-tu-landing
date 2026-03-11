import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda online!" />
    </>
  );
}

export default App;