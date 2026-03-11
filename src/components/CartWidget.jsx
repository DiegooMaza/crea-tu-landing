import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget" title="Ver carrito">
      <span role="img" aria-label="cart">🛒</span>
      <span>Carrito</span>
    </div>
  );
};

export default CartWidget;