import React, { useState } from 'react';
import './Quantity.css';

function Quantity() {
  const [quantity, setQuantity] = useState(1);


  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <div className="quantity-wrapper">
          <span onClick={decrement}>-</span>
          <span> quantity ({quantity}) </span>
          <span onClick={increment}>+</span>
    </div> 
  )
}

export default Quantity
