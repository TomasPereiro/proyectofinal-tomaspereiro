import React, { useState, useContext, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

function ItemCount({prod}) {
  const [count, setCount] = useState(0)
  const { cart, addToCart } = useCart()


  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };
  useEffect(() => {
    
  },[cart])

  

  return (
    <div>
      <h3>Cantidad: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => {
        addToCart({...prod, cantidad: count})
      }}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount